import { useEffect, useState } from "react";
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
  
  const [data, setData] = useState<NewsType[]>([]);
  const [error, setError] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(0); 


  const fetchAllNews = async (page:number) => {
    setIsLoading(true);
    setError("");
    try {
      const res = await api.get(`/news/?page=${page}`);

        const newsData: NewsType[] = res.data.results.map((item: any) => ({
          id: item.id,
          title: item.title,
          image: item.image,
          description: item.content,
          createdAt: new Date(item.published_at),
          updatedAt: new Date(item.published_at),
        }));
        setData(newsData);
    

       if (pageSize === 0 && res.data.results.length > 0) {
        setPageSize(res.data.results.length);
      }
     if (pageSize > 0) {
        setTotalPages(Math.ceil(res.data.count / pageSize));
      }
    } catch (err: any) {
      if (err.response?.status === 404 && page > 1) {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      } else {
        setError(err.message || "Server not responding");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNews(currentPage);
  }, [currentPage, pageSize]); 


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
