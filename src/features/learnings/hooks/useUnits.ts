import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { classUnits } from "../mock-data";
import { AxiosError } from "axios";

export type Unit = {
    id: string;
    number: string;
    title: string;
    image: string;
};

export const useUnits = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<Unit[]>([]);
    const [error, setError] = useState("");

    const [searchParams] = useSearchParams();
    const classNo = Number(searchParams.get("class"));
    const subject = searchParams.get("subject") ?? "";

    const fetchUnits = async () => {
        if (!classNo || !subject) {
            return setError("Missing class or subject.");
        }

        setIsLoading(true);
        setError("");
        try {


            setData(classUnits);

        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error?.response?.data?.message || "Failed to fetch units.");
            } else {
                setError("Failed to fetch units.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUnits();
    }, [classNo, subject]);

    return {
        refetch: fetchUnits,
        isLoading,
        error,
        data,
        classNo,
        subject,
    };
};
