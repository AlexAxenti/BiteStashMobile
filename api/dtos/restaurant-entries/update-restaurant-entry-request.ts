import { EntryStatus } from '@/api/models/restaurant-entry';

export interface UpdateRestaurantEntryRequest {
  status?: EntryStatus | null;
  rating?: number | null;
  notes?: string | null;
  visitedAt?: string | null;
  restaurantName?: string | null;
  restaurantAddress?: string | null;
}
