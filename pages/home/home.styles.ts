import { useTheme } from '@/hooks/use-theme';
import { StyleSheet } from 'react-native';

export const useHomeStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 8,
    },
    headerTitle: {
      fontSize: 26,
      fontWeight: '700',
      color: colors.text,
    },
    settingsButton: {
      padding: 6,
    },
    settingsIcon: {
      fontSize: 22,
      color: colors.icon,
    },
    tabBar: {
      flexDirection: 'row',
      marginHorizontal: 20,
      marginBottom: 8,
      borderRadius: 10,
      backgroundColor: colors.surface,
      padding: 3,
    },
    tab: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center',
      borderRadius: 8,
    },
    tabActive: {
      backgroundColor: colors.accent,
    },
    tabText: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.textMuted,
    },
    tabTextActive: {
      color: colors.textOnAccent,
    },
    sortRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 6,
    },
    sortLabel: {
      fontSize: 12,
      color: colors.textMuted,
      marginRight: 6,
    },
    sortButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 6,
      backgroundColor: colors.surface,
    },
    sortButtonText: {
      fontSize: 12,
      color: colors.text,
      fontWeight: '500',
    },
    sortArrow: {
      fontSize: 16,
      color: colors.textMuted,
      marginLeft: 4,
    },
    listContent: {
      paddingHorizontal: 20,
      paddingBottom: 100,
    },
    spinner: {
      marginTop: 60,
    },
    emptyContainer: {
      alignItems: 'center',
      marginTop: 60,
      paddingHorizontal: 32,
    },
    emptyText: {
      fontSize: 15,
      color: colors.textMuted,
      textAlign: 'center',
      lineHeight: 22,
    },
    addButton: {
      position: 'absolute',
      bottom: 28,
      alignSelf: 'center',
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: colors.accent,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    addButtonPressed: {
      transform: [{ scale: 0.9 }],
      opacity: 0.85,
    },
    addButtonText: {
      fontSize: 30,
      color: colors.textOnAccent,
      lineHeight: 32,
      fontWeight: '400',
    },
  });
};
