import { useAuth } from '@/contexts/auth-context';
import { Text, TouchableOpacity, View } from 'react-native';
import { useHomeStyles } from './home.styles';

export default function HomePage() {
  const { logout } = useAuth();
  const styles = useHomeStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
