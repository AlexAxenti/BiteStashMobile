import { CreateRestaurantEntryRequest } from '@/api/dtos/restaurant-entries/create-restaurant-entry-request';
import { createRestaurantEntry } from '@/api/endpoints/restaurant-entries/create-restaurant-entry';
import { RestaurantEntry } from '@/api/models/restaurant-entry';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateRestaurantEntryMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: CreateRestaurantEntryRequest) => createRestaurantEntry(request),
    onSuccess: (data) => {
      queryClient.setQueryData<RestaurantEntry[]>(
        ['restaurant-entries', 'list', data.status],
        (prev) => (prev ? [data, ...prev] : [data])
      );
    },
  });
}
