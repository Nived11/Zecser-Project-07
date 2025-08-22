import { useEffect, useState } from "react";
import api from "../../../../lib/api";
import type { Career } from "../types";

export const useCareerById = (id?: string) => {
  const [career, setCareer] = useState<Career | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchCareer = async () => {
      try {
        setIsLoading(true);
        const res = await api.get(`/jobs/${id}/`);
        const formData = res.data;
        const mappedCareer: Career = {
          id: formData.id,
          title: formData.title,
          department: formData.department,
          subject: formData.subject,
          jobType: formData.job_type,
          vacancies: String(formData.vacancies),
          qualification: formData.qualification,
          description: formData.job_description,
          applyBy: formData.last_date, 
          is_active: formData.is_active ,
        };

        setCareer(mappedCareer);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("career not found");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCareer();
  }, [id]);

  return { career, isLoading, error };
};
