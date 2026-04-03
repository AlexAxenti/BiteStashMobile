import apiClient from '@/api/client';
import { UpdateRestaurantEntryRequest } from '@/api/dtos/restaurant-entries/update-restaurant-entry-request';
import { RestaurantEntry } from '@/api/models/restaurant-entry';

export async function updateRestaurantEntry(
  id: number,
  request: UpdateRestaurantEntryRequest
): Promise<RestaurantEntry> {
  const { data } = await apiClient.put<RestaurantEntry>(`/api/restaurant-entries/${id}`, request);
  return data;
}
