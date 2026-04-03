import { RegisterRequest } from '@/api/dtos/auth/register-request';
import { register } from '@/api/endpoints/auth/register';
import { useMutation } from '@tanstack/react-query';

export function useRegisterMutation() {
  return useMutation({
    mutationFn: (request: RegisterRequest) => register(request),
  });
}
