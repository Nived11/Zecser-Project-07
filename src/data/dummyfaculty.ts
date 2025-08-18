import type { FacultyCategory } from "../features/admin/Faculty/types/faculty";

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

export const dummyFaculty: Faculty[] = [
  {
    id: '1',
    name: 'Mary John',
    dob: '1980-02-10',
    contact: '+91 78 65 78 89 09',
    email: 'maryjohn000@gmail.com',
    doj: '2010-03-10',
    experience: '2 years',
    degree: 'B.COM',
    college: 'Marz college',
    passingYear: '1999',
    image: '/assets/faculty1.jpg',
    category: 'dedicated',
  },
  {
    id: '2',
    name: 'Sona Kurian',
    dob: '1975-05-20',
    contact: '+91 98 76 54 32 10',
    email: 'sonakurian@example.com',
    doj: '2005-08-01',
    experience: '10 years',
    degree: 'M.Ed',
    college: 'City University',
    passingYear: '2000',
    image: '/assets/faculty2.jpg',
    category: 'retired',
  },
  {
    id: '3',
    name: 'Susan',
    dob: '1950-10-04',
    dod: '2020-01-22',
    image: '/assets/faculty3.jpg',
    category: 'forever',
    degree: 'M.Sc',
    college: 'Old College',
    passingYear: '1975',
  },
  
];
