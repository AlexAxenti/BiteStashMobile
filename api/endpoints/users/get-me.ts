import apiClient from '@/api/client';
import { User } from '@/api/models/user';

export async function getMe(): Promise<User> {
  try {
    const { data } = await apiClient.get<User>('/api/users/me');
    console.log('[getMe] success:', data);
    return data;
  } catch (err) {
    console.log('[getMe] error:', err);
    throw err;
  }
}
