export interface Vaccancy {
  id: number | string;                
  title: string;
  department: string;
  subject: string;
  jobType: string;           
  vacancies: number;
  qualification: string;
  descriptionUrl: string ; 
  deadline: string;           
  createdAt: string;          
  status: boolean;        
}

export interface VaccancyFormData {
  title: string;
  department: string;
  subject: string;
  jobType: string;
  vacancies: string;         
 qualification: string[];
  description: string ;  
  deadline: string;  
  status: "active" | "inactive";        
}
