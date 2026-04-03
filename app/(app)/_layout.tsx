import { useAuth } from '@/contexts/auth-context';
import { Redirect, Stack } from 'expo-router';

export default function AppLayout() {
  const { status } = useAuth();

  if (status === 'unauthenticated') {
    return <Redirect href="/get-started" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
