export interface Applicant {
  id: string;
  name: string;
  role: string;
  appliedOn: string;
  resumeUrl: string;
  profileImage?: string;
  email?: string;
  phone?: string;
  experience?: string;
  qualification?: string;
  currentLocation?: string;
}
