export interface VideoFormData {
  class: string;
  subject: string;
  unit: string;
  unitName: string;
  unitThumbnail: string;          // NEW: Base64 or URL for unit image
  chapter: string;
  chapterName: string;
  chapterThumbnail: string;       // NEW: Base64 or URL for chapter image
  chapterShortDesc: string;
  chapterMainDesc: string;
  part: string;
  videoTitle: string;
  youtubeURL: string;
  partDescription: string;
   unitImage: string;
  chapterImage: string;
}
