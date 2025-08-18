export interface Vaccancy {
  id: string;
  title: string;
  department: string;
  subject: string;
  jobType: string;
  vacancies: number;
  qualification: string;
  descriptionUrl: string; // URL to uploaded PDF
  deadline: string;       // ISO date
  createdAt: string;
  updatedAt: string;
}

export interface VaccancyFormData {
  title: string;
  department: string;
  subject: string;
  jobType: string;
  vacancies: string;         // keep as string for inputs; cast before submit
  qualification: string;
  description: File | null;  // PDF file
  deadline: string;          // yyyy-mm-dd from <input type="date" />
}
