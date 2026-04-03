import apiClient from '@/api/client';
import { RestaurantEntry, EntryStatus } from '@/api/models/restaurant-entry';

export async function getAllRestaurantEntries(status?: EntryStatus): Promise<RestaurantEntry[]> {
  const { data } = await apiClient.get<RestaurantEntry[]>('/api/restaurant-entries', {
    params: status !== undefined ? { status } : undefined,
  });
  return data;
}
