import swal from "sweetalert";
import api from "../../../lib/api";
import { useState } from "react";

type FormData = {
    admissionNumber: string;
    password: string;
};

const useLogin = () => {
    const [formData, setformData] = useState<FormData>({
        admissionNumber: "",
        password: "",
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setformData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await api.post("api/login", formData);
            swal(response.data.message, "success");
        } catch (error: any) {
            setErrors(error.response?.data)
        } finally {
            setLoading(false)
        }
    };
    return { handleChange, handleSubmit, formData, loading, errors };
};

export default useLogin;
