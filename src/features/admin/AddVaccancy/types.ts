export interface Vaccancy {
  id: number | string;                
  title: string;
  department: string;
  subject: string;
  jobType: string;           
  vacancies: number;
  qualification: string;
  descriptionUrl: string | null; 
  deadline: string;           
  createdAt: string;          
  isActive: boolean;        
}

export interface VaccancyFormData {
  title: string;
  department: string;
  subject: string;
  jobType: string;
  vacancies: string;         
  qualification: string;
  description: File | null;  
  deadline: string;          
}
