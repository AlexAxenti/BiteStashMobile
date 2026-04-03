import { useTheme } from '@/hooks/use-theme';
import { StyleSheet } from 'react-native';

export const useStartupStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 32,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      color: colors.text,
      marginBottom: 24,
    },
    message: {
      fontSize: 16,
      color: colors.textMuted,
      textAlign: 'center',
      marginBottom: 32,
    },
    button: {
      width: '100%',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: colors.accent,
      marginBottom: 12,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.textOnAccent,
    },
    logoutButton: {
      width: '100%',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.border,
    },
    logoutButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.textMuted,
    },
  });
};
