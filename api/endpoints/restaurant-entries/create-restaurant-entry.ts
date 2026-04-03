import apiClient from '@/api/client';
import { CreateRestaurantEntryRequest } from '@/api/dtos/restaurant-entries/create-restaurant-entry-request';
import { RestaurantEntry } from '@/api/models/restaurant-entry';

export async function createRestaurantEntry(
  request: CreateRestaurantEntryRequest
): Promise<RestaurantEntry> {
  const { data } = await apiClient.post<RestaurantEntry>('/api/restaurant-entries', request);
  return data;
}
