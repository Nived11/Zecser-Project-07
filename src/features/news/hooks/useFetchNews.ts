import { useEffect, useState } from "react";
import api from "../../../lib/api";

export interface NewsType {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const useFetchNews = () => {
  const [allNews, setAllNews] = useState<NewsType[]>([]);
  const [data, setData] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  const PAGE_SIZE = 9; 

  const fetchAllNews = async () => {
    setLoading(true);
    setError(null);

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
        }));

        allResults = [...allResults, ...newsData];
        nextUrl = res.data.next; 
      }

      setAllNews(allResults);
      setTotalPages(Math.ceil(allResults.length / PAGE_SIZE));
    } catch (err: any) {
      setError(err.message || "Server not responding");
    } finally {
      setLoading(false);
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

  return {
    data,
    loading,
    error,
    totalPages,
    currentPage,
    nextPage: () => setCurrentPage((p) => Math.min(p + 1, totalPages)),
    prevPage: () => setCurrentPage((p) => Math.max(p - 1, 1)),
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
    setPage: setCurrentPage,
  };
};
