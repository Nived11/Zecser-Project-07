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
    const [data, setData] = useState<NewsType[]>([]);
    const [error, setError] = useState<string>("");
    const [totalPages, setTotalPages] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1)
     const PAGE_SIZE = 5;
    
    const fetchNews = async (currentPage: number) => {
    setIsLoading(true);
    setError("");
    try {
        const res = await api.get(`/news/`);

        const newsData: NewsType[] = res.data.results.map((item: any) => ({
            id: item.id,
            title: item.title,
            image: item.image,         
            description: item.content,      
            createdAt: new Date(item.published_at),
            updatedAt: new Date(item.published_at), 
        }));

         setTotalPages(Math.ceil(newsData.length / PAGE_SIZE));

       const startIndex = (currentPage - 1) * PAGE_SIZE;
      const paginatedData = newsData.slice(startIndex, startIndex + PAGE_SIZE);

      setData(paginatedData);

        // console.log(" news data:", newsData);
    } catch (error) {
        if (error instanceof AxiosError) {
            setError(error?.response?.data?.message || "Failed to fetch news.");
        } else if (error instanceof Error) {
            setError(error.message);
        } else {
            setError("Failed to fetch news.");
        }
    } finally {
        setIsLoading(false);
    }
};


    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage]);

    return {
        isLoading,
        data,
        error,
        refetch: () => fetchNews(currentPage),
        totalPages,
        currentPage,
        nextPage: () => setCurrentPage((p) => Math.min(p + 1, totalPages)),
        prevPage: () => setCurrentPage((p) => Math.max(p - 1, 1)),
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1,
        setPage: setCurrentPage,
    };
};
