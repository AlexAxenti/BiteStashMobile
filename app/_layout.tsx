import { AuthProvider, useAuth } from '@/contexts/auth-context';
import { useTheme } from '@/hooks/use-theme';
import StartupPage from '@/pages/startup';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';

const queryClient = new QueryClient();

function RootNavigator() {
  const { status } = useAuth();
  const { colors } = useTheme();

  if (status === 'initializing') {
    return <StartupPage />;
  }

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.background } }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="get-started" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="(app)" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </QueryClientProvider>
  );
}
