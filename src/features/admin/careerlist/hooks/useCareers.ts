import { useEffect, useState } from "react";
import type { Career } from "../types";

export const useCareers = () => {
  const [careers, setCareers] = useState<Career[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setCareers([
        {
          id: "1",
          title: "Lower Primary Class Teacher",
          department: "Teaching",
          location: "Main Campus, Kochi",
          jobType: "Full-Time",
          applyBy: "15th Aug 2025",
        },
        {
          id: "2",
          title: "Front Desk Administrator",
          department: "Administration",
          location: "Main Campus, Kochi",
          jobType: "Full-Time",
          applyBy: "18th Aug 2025",
        },
        {
          id: "3",
          title: "High School Science Teacher",
          department: "Teaching",
          location: "Main Campus, Kochi",
          jobType: "Full-Time",
          applyBy: "20th Aug 2025",
        },
        {
          id: "4",
          title: "Lower Primary Class Teacher",
          department: "Teaching",
          location: "Main Campus, Kochi",
          jobType: "Full-Time",
          applyBy: "15th Aug 2025",
        },
        {
          id: "5",
          title: "Front Desk Administrator",
          department: "Administration",
          location: "Main Campus, Kochi",
          jobType: "Full-Time",
          applyBy: "18th Aug 2025",
        },
        {
          id: "6",
          title: "High School Science Teacher",
          department: "Teaching",
          location: "Main Campus, Kochi",
          jobType: "Full-Time",
          applyBy: "20th Aug 2025",
        },
        {
          id: "7",
          title: "Lower Primary Class Teacher",
          department: "Teaching",
          location: "Main Campus, Kochi",
          jobType: "Full-Time",
          applyBy: "15th Aug 2025",
        },
        {
          id: "8",
          title: "Front Desk Administrator",
          department: "Administration",
          location: "Main Campus, Kochi",
          jobType: "Full-Time",
          applyBy: "18th Aug 2025",
        },
        {
          id: "9",
          title: "High School Science Teacher",
          department: "Teaching",
          location: "Main Campus, Kochi",
          jobType: "Full-Time",
          applyBy: "20th Aug 2025",
        },
      ]);
      setIsLoading(false);
    }, 1000); // simulate network delay

    return () => clearTimeout(timer);
  }, []);

  return { careers, isLoading };
};
