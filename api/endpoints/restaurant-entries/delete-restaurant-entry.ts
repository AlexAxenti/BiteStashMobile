import apiClient from '@/api/client';

export async function deleteRestaurantEntry(id: number): Promise<boolean> {
  const { data } = await apiClient.delete<boolean>(`/api/restaurant-entries/${id}`);
  return data;
}
