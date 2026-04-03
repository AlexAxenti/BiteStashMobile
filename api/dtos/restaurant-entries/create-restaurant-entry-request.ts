import { EntryStatus } from '@/api/models/restaurant-entry';

export interface CreateRestaurantEntryRequest {
  status: EntryStatus;
  rating?: number | null;
  notes?: string | null;
  visitedAt?: string | null;
  googlePlaceId: string;
  restaurantName: string;
  restaurantAddress: string;
}
