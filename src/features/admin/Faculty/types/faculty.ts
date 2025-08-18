// src/types/faculty.ts
export type FacultyCategory = 'dedicated' | 'retired' | 'forever';

export interface Faculty {
  id: string;
  name: string;
  dob: string;
  contact?: string;
  email?: string;
  doj?: string;
  experience?: string;
  degree?: string;
  college?: string;
  passingYear?: string;
  image: string;
  category: FacultyCategory;
  dod?: string; // only for 'forever'
}
