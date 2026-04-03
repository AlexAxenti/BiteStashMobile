import { getRestaurantEntry } from '@/api/endpoints/restaurant-entries/get-restaurant-entry';
import { useQuery } from '@tanstack/react-query';

export function useRestaurantEntryQuery(id: number) {
  return useQuery({
    queryKey: ['restaurant-entries', 'detail', id],
    queryFn: () => getRestaurantEntry(id),
    enabled: !!id,
  });
}
