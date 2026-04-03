import { RefreshTokenRequest } from '@/api/dtos/auth/refresh-token-request';
import { refreshToken } from '@/api/endpoints/auth/refresh-token';
import { useMutation } from '@tanstack/react-query';

export function useRefreshTokenMutation() {
  return useMutation({
    mutationFn: (request: RefreshTokenRequest) => refreshToken(request),
  });
}
