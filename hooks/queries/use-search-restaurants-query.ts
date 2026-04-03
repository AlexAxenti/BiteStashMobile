import { searchRestaurants } from '@/api/endpoints/search/search-restaurants';
import { useQuery } from '@tanstack/react-query';

export function useSearchRestaurantsQuery(query?: string, locationText?: string) {
  return useQuery({
    queryKey: ['search-restaurants', query, locationText],
    queryFn: () => searchRestaurants(query, locationText),
    enabled: !!query,
  });
}
