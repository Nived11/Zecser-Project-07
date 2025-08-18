import { useEffect, useState } from "react";
import { delay } from "../../../../utils/helpers";
import { newData } from "../mock-data";
import { AxiosError } from "axios";

export interface NewsType {
    id: string;
    title: string;
    image_url: string;
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
    const fetchNews = async (page: number) => {
        setIsLoading(true);
        setError("");
        try {

            await delay(1000);

            const response = newData[page];

            if (!response) {
                throw new Error("No data for this page.");
            }
            setData(response.data || []);
            setTotalPages(response.totalPages || 1);
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
