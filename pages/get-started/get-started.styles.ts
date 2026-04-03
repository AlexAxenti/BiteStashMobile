import { useTheme } from '@/hooks/use-theme';
import { StyleSheet } from 'react-native';

export const useGetStartedStyles = () => {
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
      fontSize: 32,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: colors.textMuted,
      marginBottom: 48,
      textAlign: 'center',
    },
    button: {
      width: '100%',
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: colors.accent,
      marginBottom: 14,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.textOnAccent,
    },
    outlineButton: {
      width: '100%',
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor: colors.primary,
    },
    outlineButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.text,
    },
  });
};
