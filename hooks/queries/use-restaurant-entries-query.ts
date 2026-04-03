import { getAllRestaurantEntries } from '@/api/endpoints/restaurant-entries/get-all-restaurant-entries';
import { EntryStatus } from '@/api/models/restaurant-entry';
import { useQuery } from '@tanstack/react-query';

export function useRestaurantEntriesQuery(status?: EntryStatus) {
  return useQuery({
    queryKey: ['restaurant-entries', 'list', status],
    queryFn: () => getAllRestaurantEntries(status),
  });
}
