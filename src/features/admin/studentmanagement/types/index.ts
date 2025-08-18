export type Gender = "Female" | "Male" | "Other";

export interface Student {
  id: string;
  name: string;
  admissionNo: string;
  className: string;
  image?: string;
  dob?: {
    day: string;
    month: string;
    year: string;
  };
  gender?: Gender;
  guardianName?: string;
  contactNumber?: string;
  email?: string;
  address?: string;
}
