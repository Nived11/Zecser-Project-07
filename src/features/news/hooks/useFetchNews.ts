import { useEffect, useState } from "react";
import axios from "axios";
import type { NewsItem } from "../../../types/news";

const useDummyData = true; // toggle to false when using real API

export const useFetchNews = () => {
  const [data, setData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (useDummyData) {
      const dummyNews: NewsItem[] = [
        {
          id: 1,
          title: "School Achievements",
          description:
            "Every milestone counts. We proudly showcase the remarkable accomplishments of our students and faculty.",
          imageUrl: "/schoolachievements.jpg",
          category: "achievement",
        },
        {
          id: 2,
          title: "Upcoming Events",
          description:
            "Our school calendar is always buzzing with exciting upcoming events that foster creativity and engagement.",
          imageUrl: "/upcomingevents.jpg",
          category: "event",
        },
        {
          id: 3,
          title: "Past Events Highlights",
          description:
            "Here’s what dazzled in past events—cultural nights, science exhibitions, and inter-school competitions.",
          imageUrl: "/download.png",
          category: "highlight",
        },
        {
          id: 4,
          title: "Inter-School Debate Championship",
          description:
            "Our debate team secured 1st place in the inter-school championship, showcasing logic and articulation.",
          imageUrl: "/debate.jpg",
          category: "achievement",
        },
        {
          id: 5,
          title: "Art & Culture Fest Preview",
          description:
            "Upcoming art fest will bring together painters, musicians, and dancers in a celebration of talent.",
          imageUrl: "/arts.jpg",
          category: "event",
        },
      ];

      setTimeout(() => {
        setData(dummyNews);
        setLoading(false);
      }, 500);
    } else {
      axios.get("/api/news").then((res) => {
        const result = Array.isArray(res.data) ? res.data : res.data.data;
        setData(result);
        setLoading(false);
      });
    }
  }, []);

  return { data, loading };
};
