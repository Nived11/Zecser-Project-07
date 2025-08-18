export type PodiumPos = '1st' | '2nd' | '3rd';

export interface Winner {
  name: string;
  grade: string;
  position: PodiumPos;
  photoUrl: string;
}

export interface SportItem {
  id: number;
  title: string;
  description: string;
  images: string[];
  winners: Winner[];
}
