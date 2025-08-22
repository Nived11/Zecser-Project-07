import { useEffect, useState } from "react";
import type { Career } from "../types";
import api from "../../../../lib/api";
import { formatDate } from "../utils/formatDate";

export const useCareers = (page = 1, search = "", status = "All") => {
  const [careers, setCareers] = useState<Career[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchCareers = async () => {
      try {
        let url = `/jobs/?page=${page}&search=${search}`;
        if (status === "Open") url += `&is_active=true`;
        if (status === "Closed") url += `&is_active=false`;

        const response = await api.get(url);

        const formattedResults: Career[] = response.data.results.map(
          (formData: any) => ({
            id: formData.id,
            title: formData.title,
            department: formData.department,
            subject: formData.subject,
            jobType: formData.job_type,
            vacancies: String(formData.vacancies),
            qualification: formData.qualification,
            description: formData.job_description,
            applyBy: formatDate(formData.last_date),
            is_active: formData.is_active, 
          })
        );



        setCareers(formattedResults);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error("Error fetching careers");
        }
        setCareers([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCareers();
  }, [page, search, status]);

  return { careers, isLoading, nextPage, prevPage };
};
