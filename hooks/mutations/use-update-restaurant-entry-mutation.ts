import { UpdateRestaurantEntryRequest } from '@/api/dtos/restaurant-entries/update-restaurant-entry-request';
import { updateRestaurantEntry } from '@/api/endpoints/restaurant-entries/update-restaurant-entry';
import { RestaurantEntry } from '@/api/models/restaurant-entry';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateRestaurantEntryMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, request }: { id: number; request: UpdateRestaurantEntryRequest }) =>
      updateRestaurantEntry(id, request),
    onSuccess: (data) => {
      queryClient.setQueryData<RestaurantEntry[]>(
        ['restaurant-entries', 'list', data.status],
        (prev) => prev?.map((entry) => (entry.id === data.id ? data : entry)) ?? [data]
      );
      queryClient.setQueryData(['restaurant-entries', 'detail', data.id], data);
    },
  });
}
