import { getMe } from '@/api/endpoints/users/get-me';
import { useQuery } from '@tanstack/react-query';

export function useMeQuery(enabled = true) {
  return useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    enabled,
  });
}
