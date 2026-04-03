import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAddModalStyles } from './add-modal.styles';

export default function AddModalPage() {
  const router = useRouter();
  const styles = useAddModalStyles();

  const handleManual = () => {
    router.dismiss();
    router.push('/(app)/entry-form');
  };

  return (
    <View style={styles.overlay}>
      <Pressable style={styles.backdrop} onPress={() => router.back()}>
        <BlurView intensity={30} tint="dark" style={styles.blur} />
      </Pressable>
      <View style={styles.modal}>

        <TextInput
          style={styles.searchInput}
          placeholder="Search restaurants..."
          placeholderTextColor="#999"
          editable={false}
        />

        <View style={styles.dividerRow}>
          <View style={styles.divider} />
        </View>

        <TouchableOpacity style={styles.manualButton} onPress={handleManual} activeOpacity={0.8}>
          <Text style={styles.manualButtonText}>Input Manually</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
