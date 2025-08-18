export interface NewsItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'achievement' | 'event' | 'highlight';
}
