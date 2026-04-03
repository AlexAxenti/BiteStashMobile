import { EntryStatus, RestaurantEntry } from '@/api/models/restaurant-entry';
import { Text, TouchableOpacity, View } from 'react-native';
import { useEntryCardStyles } from './entry-card.styles';

interface EntryCardProps {
  entry: RestaurantEntry;
  onPress: (entry: RestaurantEntry) => void;
}

export default function EntryCard({ entry, onPress }: EntryCardProps) {
  const styles = useEntryCardStyles();

  const visitedDate = entry.visitedAt
    ? new Date(entry.visitedAt).toLocaleDateString()
    : null;

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(entry)} activeOpacity={0.7}>
      <Text style={styles.name} numberOfLines={1}>{entry.restaurantName}</Text>
      {entry.restaurantAddress ? (
        <Text style={styles.address} numberOfLines={1}>{entry.restaurantAddress}</Text>
      ) : null}
      <View style={styles.metaRow}>
        {entry.status === EntryStatus.Visited && entry.rating != null && (
          <Text style={styles.ratingText}>★ {entry.rating.toFixed(1)}</Text>
        )}
        {entry.status === EntryStatus.Visited && visitedDate && (
          <Text style={styles.metaText}>Visited {visitedDate}</Text>
        )}
        {entry.notes ? (
          <Text style={styles.metaTextNotes} numberOfLines={1}>📝 {entry.notes}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}
