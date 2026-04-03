import { useAuth } from '@/contexts/auth-context';
import { Redirect } from 'expo-router';

export default function Index() {
  const { status } = useAuth();

  if (status === 'authenticated') {
    return <Redirect href="/(app)/home" />;
  }

  return <Redirect href="/get-started" />;
}
