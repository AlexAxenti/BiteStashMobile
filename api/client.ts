import axios from 'axios';
import { getAccessToken, setAccessToken } from '@/services/access-token-store';
import { deleteRefreshToken, getRefreshToken, setRefreshToken } from '@/services/refresh-token-storage';

let _onUnauthenticated: (() => void) | null = null;

export function setOnUnauthenticated(callback: () => void): void {
  _onUnauthenticated = callback;
}

const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL ?? 'http://localhost:5267';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry && !isRefreshing) {
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const storedRefreshToken = await getRefreshToken();
        if (!storedRefreshToken) throw new Error('No refresh token stored');

        // Use a plain axios instance to avoid going through these interceptors again
        const { data } = await axios.post(`${BASE_URL}/api/auth/refresh`, {
          refreshToken: storedRefreshToken,
        });

        setAccessToken(data.accessToken);
        await setRefreshToken(data.refreshToken);

        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return apiClient(originalRequest);
      } catch {
        setAccessToken(null);
        await deleteRefreshToken();
        _onUnauthenticated?.();
        return Promise.reject(error);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
