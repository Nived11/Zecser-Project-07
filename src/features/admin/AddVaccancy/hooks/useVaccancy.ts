import { useState } from "react";
import type { VaccancyFormData } from "../types";
import api from "../../../../lib/api"; 
import toast from "react-hot-toast";

export const useVaccancy = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState<string | null>(null);

  
  const buildFormData = (formData: VaccancyFormData) => {
    const fd = new FormData();

    fd.append("title", formData.title);
    fd.append("department", formData.department);
    fd.append("subject", formData.subject);
    fd.append("job_type", formData.jobType); 
    fd.append("vacancies", String(formData.vacancies));
    fd.append("qualification", formData.qualification);
    fd.append("last_date", formData.deadline); 
    if (formData.description) {
      fd.append("job_description_pdf", formData.description); 
    }

    return fd;
  };


  const addVaccancy = async (formData: VaccancyFormData) => {
    setLoading(true);
    setError(null);
    try {
      const fd = buildFormData(formData);
      const res = await api.post("/jobs/", fd);
      console.log("Vacancy added:", res.data);
      toast.success(res.data.message || "Job vacancy added ");
      
      return res.data;
    } catch (e) {
      setError("Failed to post vacancy. Please try again.");
      throw e;
    } finally {
      setLoading(false);
    }
  };


  const updateVaccancy = async (id: string | number, formData: VaccancyFormData) => {
    setLoading(true);
    setError(null);
    try {
      const fd = buildFormData(formData);
      const res = await api.patch(`/jobs/${id}/`, fd,);
      console.log("Vacancy updated:", res.data);
      toast.success(res.data.message || "Job vacancy updated");
      return res.data;
      
    } catch (e) {
      setError("Failed to update vacancy. Please try again.");
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { addVaccancy, updateVaccancy, loading, error };
};
