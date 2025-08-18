import swal from "sweetalert";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../lib/api";

type FormData = {
    email: string;
    password: string;
};

const useAdminLogin = () => {
    const [formData, setformData] = useState<FormData>({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const navigate = useNavigate()
    console.log(navigate, setLoading);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setformData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await api.post("api/sub-admin/login", formData);
            if (response.status == 201) {
                swal(response.data, "success");
                navigate("/sub-admin")
            }
        } catch (error: any) {
            setErrors(error.response?.data)
        } finally {
            setLoading(false)
        }
    };
    return { handleChange, handleSubmit, formData, loading,errors };
};

export default useAdminLogin;
