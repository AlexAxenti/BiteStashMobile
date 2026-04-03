import { LoginRequest } from '@/api/dtos/auth/login-request';
import { login } from '@/api/endpoints/auth/login';
import { useMutation } from '@tanstack/react-query';

export function useLoginMutation() {
  return useMutation({
    mutationFn: (request: LoginRequest) => login(request),
  });
}
