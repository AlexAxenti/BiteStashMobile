import apiClient from '@/api/client';
import { AuthResponse } from '@/api/dtos/auth/auth-response';
import { RegisterRequest } from '@/api/dtos/auth/register-request';

export async function register(request: RegisterRequest): Promise<AuthResponse> {
  try {
    const { data } = await apiClient.post<AuthResponse>('/api/auth/register', request);
    console.log('[register] success:', data);
    return data;
  } catch (err) {
    console.log('[register] error:', err);
    throw err;
  }
}
