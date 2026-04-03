import apiClient from '@/api/client';
import { RestaurantEntry } from '@/api/models/restaurant-entry';

export async function getRestaurantEntry(id: number): Promise<RestaurantEntry> {
  const { data } = await apiClient.get<RestaurantEntry>(`/api/restaurant-entries/${id}`);
  return data;
}
