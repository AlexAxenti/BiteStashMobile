import { useTheme } from '@/hooks/use-theme';
import { StyleSheet } from 'react-native';

export const useHomeStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
    },
    logoutButton: {
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 10,
      borderWidth: 1.5,
      borderColor: colors.border,
    },
    logoutButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.textMuted,
    },
  });
};
