// features/admin/careerlist/hooks/useCareerById.ts
import { useEffect, useState } from "react";
import api from "../../../../lib/api";
import type { Career } from "../types";

const formatDate = (dateStr: string) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";
  return `${day}${suffix} ${month} ${year}`;
};

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
          applyBy: formatDate(formData.last_date),
        };

        setCareer(mappedCareer);
      } catch (err) {
        setError("Career not found");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCareer();
  }, [id]);

  return { career, isLoading, error };
};
