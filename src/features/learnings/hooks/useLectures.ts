import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AxiosError } from "axios";
import { extractVideoID } from "../utils/extractVideoID";

export type LectureType = {
  id: string;
  title: string;
  description: string;
  videos: {
    link: string;
    thumbnail: string;
    title: string;
    description: string;
  }[];
};

const resData = {
  id: "1",
  title: "My First Word",
  description:
    "This chapter helps children learn their first simple English words through fun visuals and songs. Topics include action words, everyday objects, animals, colors, and more—making vocabulary building exciting and interactive!",
  videos: [
    "https://youtu.be/yCjJyiqpAuU?si=5eb87h_R_kSkwMQg",
    "https://youtu.be/VNzRAjbs204?si=uQMvQpPRvOu-0Txx",
  ],
};


const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || "YOUR_API_KEY_HERE";

export const useLectures = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<LectureType>();
  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();
  const classNo = Number(searchParams.get("class"));
  const subject = searchParams.get("subject") ?? "";
  const unit = searchParams.get("unit");
  const chapter = searchParams.get("chapter");

  const fetchLectures = async () => {
    if (!classNo || !subject || !unit) {
      setError("Page not found.");
      return;
    }

    setIsLoading(true);
    setError("");
    try {


      const fetchedData = resData;

      const videoData = await Promise.all(
        fetchedData.videos.map(async (link) => {
          const videoId = extractVideoID(link);
          if (!videoId) return null;

          try {
            const res = await fetch(
              `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
            );
            const json = await res.json();
            const snippet = json.items?.[0]?.snippet;

            return {
              link,
              title: snippet?.title || "Unknown Title",
              description: snippet?.description || "No Description",
              thumbnail: snippet?.thumbnails?.high?.url || "",
            };
          } catch (err) {
            console.error("YouTube API error:", err);
            return {
              link,
              title: "Error loading video",
              description: "",
              thumbnail: "",
            };
          }
        })
      );

      const finalData: LectureType = {
        ...fetchedData,
        videos: videoData.filter(Boolean) as LectureType["videos"],
      };

      setData(finalData);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error?.response?.data?.message || "Failed to fetch Lectures.");
      } else {
        setError("Failed to fetch Lectures.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLectures();
  }, [classNo, subject]);

  return {
    refetch: fetchLectures,
    isLoading,
    error,
    data,
    classNo,
    subject,
    unit,
    chapter,
  };
};
