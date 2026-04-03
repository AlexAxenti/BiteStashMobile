import { useTheme } from '@/hooks/use-theme';
import { StyleSheet } from 'react-native';

export const useSettingsStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    backButton: {
      padding: 4,
    },
    backButtonText: {
      fontSize: 16,
      color: colors.text,
      fontWeight: '500',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.text,
    },
    headerSpacer: {
      minWidth: 60,
    },
    content: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 32,
    },
    label: {
      fontSize: 13,
      fontWeight: '500',
      color: colors.textMuted,
      marginBottom: 6,
    },
    email: {
      fontSize: 17,
      color: colors.text,
      fontWeight: '500',
      marginBottom: 40,
    },
    logoutButton: {
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor: colors.danger,
    },
    logoutButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.danger,
    },
  });
};
