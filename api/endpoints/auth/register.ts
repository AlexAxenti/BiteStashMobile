import apiClient from '@/api/client';
import { RegisterRequest } from '@/api/dtos/auth/register-request';
import { AuthResponse } from '@/api/dtos/auth/auth-response';

export async function register(request: RegisterRequest): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>('/api/auth/register', request);
  return data;
}
