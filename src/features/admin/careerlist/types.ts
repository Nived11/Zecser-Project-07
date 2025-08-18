export interface Career {
  id: string;
  title: string;
  department: "Teaching" | "Administration";
  location: string;
  jobType: string;
  applyBy: string;
  subject?: string;
  vacancies?: string;
  qualification?: string
}
