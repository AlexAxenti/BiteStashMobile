import { getMe } from '@/api/endpoints/users/get-me';
import { useQuery } from '@tanstack/react-query';

export function useMeQuery() {
  return useQuery({
    queryKey: ['me'],
    queryFn: getMe,
  });
}
