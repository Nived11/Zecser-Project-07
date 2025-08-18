import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { classSubjects } from "../mock-data";
import { AxiosError } from "axios";
// import api from "../../../lib/api";

export const useSubjects = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<string[]>([])
    const [error, setError] = useState<string>('')
    const [searchParams] = useSearchParams()
    const classNo: number = Number(searchParams.get('class'))

    const fetchSubjects = async () => {

        if (!classNo) return setError("Page not found.")
            
        setIsLoading(true)
        setError('')
        try {
            // const res = await api.get('/api/subject')

            // const data = res.data
            setData(classSubjects[classNo as keyof typeof classSubjects])
        } catch (error) {
            if (error instanceof AxiosError) setError(error?.response?.data?.message || "Failed to fetch subjects.")
            else setError("Failed to fetch subjects.")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchSubjects()
    }, [])


    return {
        refetch: fetchSubjects,
        isLoading,
        error,
        data,
        classNo
    }
}