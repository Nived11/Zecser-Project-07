// hooks/useFetchEvents.ts
import { useEffect, useState } from "react";
import type { EventsItem } from "../../../types/events";

const useDummyData = true;

export const useFetchEvents = () => {
  const [data, setData] = useState<EventsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (useDummyData) {
      const dummyEvents: EventsItem[] = [
        {
          id: 1,
          images: [
            "/culture1.jpg",
            "/culture2.jpg",
            "/culture3.jpg"
          ],
          description: "Annual Cultural Fest – A vibrant celebration of art and heritage.",
          date: "2025-08-10",
          location: "Main Auditorium",
        },
        {
          id: 2,
          images: [
            "/science1.png",
            "/science2.jpg",
            "/science3.jpg",
            "/science4.jpg"
          ],
          description: "Inter-school Science Exhibition – Showcasing innovation and creativity.",
          date: "2025-09-05",
          location: "Science Block",
        },
        {
          id: 3,
          images: [
            "/sports1.png",
            "/sports2.jpg",
            "/sports3.jpg"
          ],
          description: "Sports Day – Uniting students through spirited competitions.",
          date: "2025-08-25",
          location: "School Grounds",
         },
        // {
        //   id: 4,
        //   images: [
        //     "/images/music1.jpg",
        //     "/images/music2.jpg"
        //   ],
        //   description: "Music Night – A soulful evening of rhythm and harmony.",
        //   date: "2025-09-15",
        //   location: "Open Amphitheatre",
        // },
        // {
        //   id: 5,
        //   images: [
        //     "/images/workshop1.jpg"
        //   ],
        //   description: "Photography Workshop – Learn and explore the art of storytelling through lens.",
        //   date: "2025-08-30",
        //   location: "Room A-204",
        // },
      ];

      setTimeout(() => {
        setData(dummyEvents);
        setLoading(false);
      }, 500);
    } else {
      // replace with real API
    }
  }, []);

  return { data, loading };
};
