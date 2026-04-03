export enum EntryStatus {
  Visited = 0,
  Planned = 1,
}

export interface RestaurantEntry {
  id: number;
  userId: string;
  status: EntryStatus;
  rating: number | null;
  notes: string | null;
  visitedAt: string | null;
  createdAt: string;
  updatedAt: string;
  restaurantName: string;
  restaurantAddress: string;
}
