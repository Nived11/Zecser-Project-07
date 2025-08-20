import { useEffect, useState } from "react";
import type { Career } from "../types";
import api from "../../../../lib/api";

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

export const useCareers = () => {
  const [careers, setCareers] = useState<Career[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCareers = async () => {
    setIsLoading(true);
    try {
      const res = await api.get("/jobs/");
      console.log(res.data.results);

      const data: Career[] = res.data.results.map((item: any) => ({
        id: item.id,
        title: item.title,
        department: item.department,
        jobType: item.job_type,
        applyBy: formatDate(item.last_date), 
        subject: item.subject,
        vacancies: item.vacancies,
        qualification: item.qualification,
      }));

      setCareers(data);
      console.log("Fetched careers:", data);
    } catch (error) {
      console.error("Error fetching careers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  return { careers, isLoading };
};
