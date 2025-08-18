import { useEffect, useState } from "react";
import type { SportItem } from "../types";

export const useSportsGallery = () => {
  const [sports, setSports] = useState<SportItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dummy content – swap with API later
    const demo: SportItem[] = [
      {
        id: 1,
        title: "Chess",
        description:
          "Our inter-house chess tournament featured strategic gameplay and great sportsmanship from classes 5–8.Our inter-house chess tournament featured strategic gameplay and great sportsmanship from classes 5–8.Our inter-house chess tournament featured strategic gameplay and great sportsmanship from classes 5–8.Our inter-house chess tournament featured strategic gameplay and great sportsmanship from classes 5–8.Our inter-house chess tournament featured strategic gameplay and great sportsmanship from classes 5–8.Our inter-house chess tournament featured strategic gameplay and great sportsmanship from classes 5–8.Our inter-house chess tournament featured strategic gameplay and great sportsmanship from classes 5–8.Our inter-house chess tournament featured strategic gameplay and great sportsmanship from classes 5–8.",
        images: [
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1546778313-f1dca98d3e9b?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop",
        ],
        winners: [
          {
            name: "ABHINAV",
            grade: "VI B",
            position: "1st",
            photoUrl:
              "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=300&auto=format&fit=crop",
          },
          {
            name: "CHARLIE",
            grade: "VI B",
            position: "2nd",
            photoUrl:
              "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&auto=format&fit=crop",
          },
          {
            name: "SOORAJ",
            grade: "VI B",
            position: "3rd",
            photoUrl:
              "https://images.unsplash.com/photo-1545996124-0501ebae84d5?q=80&w=300&auto=format&fit=crop",
          },
        ],
      },
      {
        id: 2,
        title: "Badminton",
        description:
          "Fast rallies and exciting finishes! Students showcased agility and teamwork on the court.Fast rallies and exciting finishes! Students showcased agility and teamwork on the court.Fast rallies and exciting finishes! Students showcased agility and teamwork on the court.Fast rallies and exciting finishes! Students showcased agility and teamwork on the court.",
        images: [
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop",
        ],
        winners: [
          {
            name: "JEEVAN",
            grade: "VII A",
            position: "1st",
            photoUrl:
              "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&auto=format&fit=crop",
          },
          {
            name: "AKHIL",
            grade: "VII B",
            position: "2nd",
            photoUrl:
              "https://images.unsplash.com/photo-1545996124-0501ebae84d5?q=80&w=300&auto=format&fit=crop",
          },
          {
            name: "ROHAN",
            grade: "VII A",
            position: "3rd",
            photoUrl:
              "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=300&auto=format&fit=crop",
          },
        ],
      },
      {
        id: 3,
        title: "Football",
        description:
          "An energetic inter-house football meet with thrilling goals and spirited cheering from the stands.",
        images: [
          "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop",
        ],
        winners: [
          {
            name: "TEAM BLUE",
            grade: "VIII",
            position: "1st",
            photoUrl:
              "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=300&auto=format&fit=crop",
          },
          {
            name: "TEAM RED",
            grade: "VIII",
            position: "2nd",
            photoUrl:
              "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&auto=format&fit=crop",
          },
          {
            name: "TEAM GREEN",
            grade: "VII",
            position: "3rd",
            photoUrl:
              "https://images.unsplash.com/photo-1545996124-0501ebae84d5?q=80&w=300&auto=format&fit=crop",
          },
        ],
      },
    ];

    const t = setTimeout(() => {
      setSports(demo);
      setLoading(false);
    }, 400);

    return () => clearTimeout(t);
  }, []);

  return { sports, loading };
};
