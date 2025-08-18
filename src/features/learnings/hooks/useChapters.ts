import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { classChapters } from "../mock-data";
import { AxiosError } from "axios";

export type ChapterType = {
    id: string;
    number: string;
    title: string;
    image: string;
    description: string;
};

export const useChapters = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<ChapterType[]>([]);
    const [error, setError] = useState("");

    const [searchParams] = useSearchParams();
    const classNo = Number(searchParams.get("class"));
    const subject = searchParams.get("subject") ?? "";
    const unit = searchParams.get('unit')

    
    const fetchChapters = async () => {
        if (!classNo || !subject || !unit) {
            return setError("Page not found.");
        }

        setIsLoading(true);
        setError("");
        try {


            setData(classChapters);

        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error?.response?.data?.message || "Failed to fetch Chapters.");
            } else {
                setError("Failed to fetch Chapters.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchChapters();
    }, [classNo, subject]);

    return {
        refetch: fetchChapters,
        isLoading,
        error,
        data,
        classNo,
        subject,
        unit
    };
};
