import { useTheme } from '@/hooks/use-theme';
import { StyleSheet } from 'react-native';

export const useEntryCardStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    card: {
      backgroundColor: colors.surface,
      borderRadius: 12,
      padding: 14,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: colors.border,
    },
    name: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.text,
      marginBottom: 3,
    },
    address: {
      fontSize: 13,
      color: colors.textMuted,
      marginBottom: 6,
    },
    metaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    metaText: {
      fontSize: 12,
      color: colors.textMuted,
      flexShrink: 0,
    },
    metaTextNotes: {
      fontSize: 12,
      color: colors.textMuted,
      flex: 1,
    },
    ratingText: {
      fontSize: 12,
      color: colors.accent,
      fontWeight: '600',
    },
  });
};
