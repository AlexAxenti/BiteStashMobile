import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { useGetStartedStyles } from './get-started.styles';

export default function GetStartedPage() {
  const router = useRouter();
  const styles = useGetStartedStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BiteStash</Text>
      <Text style={styles.subtitle}>Keep track of the places you love and want to visit.</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.outlineButton} onPress={() => router.push('/register')}>
        <Text style={styles.outlineButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
