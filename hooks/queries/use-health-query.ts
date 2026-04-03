import { checkHealth } from '@/api/health/check-health';
import { useQuery } from '@tanstack/react-query';

export function useHealthQuery() {
  return useQuery({
    queryKey: ['health'],
    queryFn: checkHealth,
    retry: false,
  });
}
