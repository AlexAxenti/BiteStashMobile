import apiClient from '@/api/client';
import { User } from '@/api/models/user';

export async function getMe(): Promise<User> {
  const { data } = await apiClient.get<User>('/api/users/me');
  return data;
}
