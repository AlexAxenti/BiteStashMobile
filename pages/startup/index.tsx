import { useAuth } from '@/contexts/auth-context';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { useStartupStyles } from './startup.styles';

export default function StartupPage() {
  const { startupError, logout, retryStartup } = useAuth();
  const styles = useStartupStyles();

  if (startupError) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Failed to reach the server</Text>
        <Text style={styles.message}>
          The server may still be starting up. Please try again in a moment.
        </Text>
        <TouchableOpacity style={styles.button} onPress={retryStartup}>
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#9AB17A" />
      <Text style={[styles.message, { marginTop: 20, marginBottom: 0 }]}>Connecting...</Text>
    </View>
  );
}
