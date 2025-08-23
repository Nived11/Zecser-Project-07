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
    fd.append("qualification", formData.qualification.join(", "));
    fd.append("last_date", formData.deadline); 
    fd.append("job_description", formData.description as string || "");
    fd.append("is_active", formData.status === "active" ? "true" : "false");

    return fd;
  };


  const addVaccancy = async (formData: VaccancyFormData) => {
    setLoading(true);
    setError(null);
    try {
      const fd = buildFormData(formData);
      const res = await api.post("/jobs/", fd)
      toast.success(res.data.message || "Job vacancy added ");
      
      return res.data;
      
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
      toast.error("Failed to add vacancy");
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
      const res = await api.patch(`/jobs/${id}/`, fd,)
      toast.success(res.data.message || "Job vacancy updated");
      return res.data;
      
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
      toast.error("Failed to update vacancy");
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { addVaccancy, updateVaccancy, loading, error };
};
