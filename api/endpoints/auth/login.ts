import apiClient from '@/api/client';
import { LoginRequest } from '@/api/dtos/auth/login-request';
import { AuthResponse } from '@/api/dtos/auth/auth-response';

export async function login(request: LoginRequest): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>('/api/auth/login', request);
  return data;
}
