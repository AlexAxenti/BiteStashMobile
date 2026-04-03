import apiClient from '@/api/client';
import { RefreshTokenRequest } from '@/api/dtos/auth/refresh-token-request';
import { AuthResponse } from '@/api/dtos/auth/auth-response';

export async function refreshToken(request: RefreshTokenRequest): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>('/api/auth/refresh', request);
  return data;
}
