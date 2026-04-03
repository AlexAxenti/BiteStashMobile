import apiClient from '@/api/client';
import { Restaurant } from '@/api/models/restaurant';

export async function searchRestaurants(
  query?: string,
  locationText?: string
): Promise<Restaurant[]> {
  const { data } = await apiClient.get<Restaurant[]>('/api/search', {
    params: { query, locationText },
  });
  return data;
}
