import { deleteRestaurantEntry } from '@/api/endpoints/restaurant-entries/delete-restaurant-entry';
import { EntryStatus, RestaurantEntry } from '@/api/models/restaurant-entry';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useDeleteRestaurantEntryMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteRestaurantEntry(id),
    onSuccess: (_, id) => {
      for (const status of [EntryStatus.Visited, EntryStatus.Planned]) {
        queryClient.setQueryData<RestaurantEntry[]>(
          ['restaurant-entries', 'list', status],
          (prev) => prev?.filter((entry) => entry.id !== id)
        );
      }
      queryClient.removeQueries({ queryKey: ['restaurant-entries', 'detail', id] });
    },
  });
}
