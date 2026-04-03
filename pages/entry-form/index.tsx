import { CreateRestaurantEntryRequest } from '@/api/dtos/restaurant-entries/create-restaurant-entry-request';
import { UpdateRestaurantEntryRequest } from '@/api/dtos/restaurant-entries/update-restaurant-entry-request';
import { EntryStatus, RestaurantEntry } from '@/api/models/restaurant-entry';
import { useCreateRestaurantEntryMutation } from '@/hooks/mutations/use-create-restaurant-entry-mutation';
import { useDeleteRestaurantEntryMutation } from '@/hooks/mutations/use-delete-restaurant-entry-mutation';
import { useUpdateRestaurantEntryMutation } from '@/hooks/mutations/use-update-restaurant-entry-mutation';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import {
    Alert,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useEntryFormStyles } from './entry-form.styles';

export default function EntryFormPage() {
  const router = useRouter();
  const styles = useEntryFormStyles();
  const params = useLocalSearchParams<{ entry?: string }>();

  const existing: RestaurantEntry | null = useMemo(() => {
    if (params.entry) {
      try {
        return JSON.parse(params.entry) as RestaurantEntry;
      } catch {
        return null;
      }
    }
    return null;
  }, [params.entry]);

  const isEditing = existing !== null;

  const [name, setName] = useState(existing?.restaurantName ?? '');
  const [address, setAddress] = useState(existing?.restaurantAddress ?? '');
  const [status, setStatus] = useState<EntryStatus>(existing?.status ?? EntryStatus.Visited);
  const [rating, setRating] = useState(existing?.rating != null ? existing.rating.toString() : '');
  const [visitedAt, setVisitedAt] = useState(
    existing?.visitedAt ? new Date(existing.visitedAt).toISOString().split('T')[0] : ''
  );
  const [notes, setNotes] = useState(existing?.notes ?? '');
  const [error, setError] = useState<string | null>(null);

  const createMutation = useCreateRestaurantEntryMutation();
  const updateMutation = useUpdateRestaurantEntryMutation();
  const deleteMutation = useDeleteRestaurantEntryMutation();

  const saving = createMutation.isPending || updateMutation.isPending;

  const handleRatingChange = (text: string) => {
    // Allow only digits and one decimal point, max one decimal place (0.0–5.0)
    if (text === '' || /^\d?\.?\d{0,1}$/.test(text)) {
      setRating(text);
    }
  };

  const handleSave = async () => {
    if (!name.trim()) {
      setError('Restaurant name is required.');
      return;
    }

    const parsedRating = rating ? parseFloat(rating) : null;
    if (status === EntryStatus.Visited && parsedRating != null && (parsedRating < 0 || parsedRating > 5)) {
      setError('Rating must be between 0.0 and 5.0.');
      return;
    }
    setError(null);
    const parsedVisitedAt = visitedAt || null;

    try {
      if (isEditing) {
        const request: UpdateRestaurantEntryRequest = {
          restaurantName: name.trim(),
          restaurantAddress: address.trim() || null,
          status,
          rating: status === EntryStatus.Visited ? parsedRating : null,
          visitedAt: status === EntryStatus.Visited ? parsedVisitedAt : null,
          notes: notes.trim() || null,
        };
        await updateMutation.mutateAsync({ id: existing.id, request });
      } else {
        const request: CreateRestaurantEntryRequest = {
          restaurantName: name.trim(),
          restaurantAddress: address.trim(),
          googlePlaceId: '',
          status,
          rating: status === EntryStatus.Visited ? parsedRating : null,
          visitedAt: status === EntryStatus.Visited ? parsedVisitedAt : null,
          notes: notes.trim() || null,
        };
        await createMutation.mutateAsync(request);
      }
      router.back();
    } catch (err) {
      setError('Failed to save. Please try again.');
    }
  };

  const handleDelete = () => {
    if (!existing) return;
    Alert.alert('Delete Entry', 'Are you sure you want to delete this restaurant entry?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          try {
            await deleteMutation.mutateAsync(existing.id);
            router.back();
          } catch {
            setError('Failed to delete. Please try again.');
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerSide}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>‹ Back</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>{isEditing ? 'Edit Entry' : 'New Entry'}</Text>
        <View style={[styles.headerSide, { alignItems: 'flex-end' }]}>
          {isEditing && (
            <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView
        automaticallyAdjustKeyboardInsets
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        {/* Restaurant Name */}
        <Text style={styles.label}>Restaurant Name *</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Restaurant name"
          autoCorrect={false}
        />

        {/* Address */}
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Address"
          autoCorrect={false}
        />

        {/* Status toggle */}
        <Text style={styles.label}>Status *</Text>
        <View style={styles.statusRow}>
          <TouchableOpacity
            style={[styles.statusOption, status === EntryStatus.Visited && styles.statusOptionActive]}
            onPress={() => setStatus(EntryStatus.Visited)}
          >
            <Text style={[styles.statusText, status === EntryStatus.Visited && styles.statusTextActive]}>
              Visited
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.statusOption, status === EntryStatus.Planned && styles.statusOptionActive]}
            onPress={() => setStatus(EntryStatus.Planned)}
          >
            <Text style={[styles.statusText, status === EntryStatus.Planned && styles.statusTextActive]}>
              Want to Try
            </Text>
          </TouchableOpacity>
        </View>

        {/* Visited-only fields */}
        {status === EntryStatus.Visited && (
          <>
            <Text style={styles.label}>Rating</Text>
            <View style={styles.ratingRow}>
              <TextInput
                style={styles.ratingInput}
                value={rating}
                onChangeText={handleRatingChange}
                placeholder="0.0"
                keyboardType="decimal-pad"
              />
              <Text style={styles.ratingHint}>0.0 – 5.0</Text>
            </View>

            <Text style={styles.label}>Last Visited</Text>
            <TextInput
              style={styles.input}
              value={visitedAt}
              onChangeText={setVisitedAt}
              placeholder="YYYY-MM-DD"
              keyboardType="numbers-and-punctuation"
            />
          </>
        )}

        {/* Notes */}
        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={[styles.input, styles.notesInput]}
          value={notes}
          onChangeText={setNotes}
          placeholder="Any notes..."
          multiline
        />

        {error && <Text style={styles.errorText}>{error}</Text>}

        <TouchableOpacity
          style={[styles.saveButton, saving && styles.saveButtonDisabled]}
          onPress={handleSave}
          disabled={saving}
          activeOpacity={0.8}
        >
          <Text style={styles.saveButtonText}>{saving ? 'Saving...' : 'Save'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
