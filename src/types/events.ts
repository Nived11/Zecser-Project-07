// types/event.ts
export interface EventsItem {
  id: number;
  images: string[];         // Multiple image URLs
  description: string;
  date?: string;
  location?: string;
}
