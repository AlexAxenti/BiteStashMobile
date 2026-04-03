import apiClient from '@/api/client';
import { AuthResponse } from '@/api/dtos/auth/auth-response';
import { LoginRequest } from '@/api/dtos/auth/login-request';

export async function login(request: LoginRequest): Promise<AuthResponse> {
  try {
    const { data } = await apiClient.post<AuthResponse>('/api/auth/login', request);
    console.log('[login] success:', data);
    return data;
  } catch (err) {
    console.log('[login] error:', err);
    throw err;
  }
}
