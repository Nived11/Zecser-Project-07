import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import api from "../../../../lib/api";

export interface NewsType {
  id: number;
  title: string;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export const useNews = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allNews, setAllNews] = useState<NewsType[]>([]);
  const [data, setData] = useState<NewsType[]>([]);
  const [error, setError] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const PAGE_SIZE = 6;

  const fetchAllNews = async () => {
    setIsLoading(true);
    setError("");
    try {
      let allResults: NewsType[] = [];
      let nextUrl: string | null = "/news/"; 

      
      while (nextUrl) {
        const res: any = await api.get(nextUrl);

        const newsData: NewsType[] = res.data.results.map((item: any) => ({
          id: item.id,
          title: item.title,
          image: item.image,
          description: item.content,
          createdAt: new Date(item.published_at),
          updatedAt: new Date(item.published_at),
        }));

        allResults = [...allResults, ...newsData];
        nextUrl = res.data.next; 
      }

      setAllNews(allResults);
      setTotalPages(Math.ceil(allResults.length / PAGE_SIZE));
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err?.response?.data?.message || "Failed to load news. Please try again.");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to load news. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNews();
  }, []);


  useEffect(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const paginated = allNews.slice(startIndex, startIndex + PAGE_SIZE);
    setData(paginated);
  }, [currentPage, allNews]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  
  return {
    isLoading,
    data,
    error,
    refetch: fetchAllNews,
    totalPages,
    currentPage,
    nextPage: () => setCurrentPage((p) => Math.min(p + 1, totalPages)),
    prevPage: () => setCurrentPage((p) => Math.max(p - 1, 1)),
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
    setPage: setCurrentPage,
  };
};
