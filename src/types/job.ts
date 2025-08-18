export interface Job {
  id: number;
  title: string;
  location: string;
  type: string; // e.g., Full-Time, Part-Time
  experience: string;
  qualification: string;
  description: string;
  requirements: string[];
}
