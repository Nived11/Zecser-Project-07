import swal from "sweetalert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../lib/api";

type Password = {
    newPassword: string;
    confirmPassword: string;
}

const useNewPassword = () => {
    const [password, setpassword] = useState<Password>({
        newPassword: "",
        confirmPassword: ""
    })
    const [isLoad, setIsLoad] = useState<boolean>(false)
    const navigate = useNavigate()
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setpassword((prev) => ({ ...prev, [name]: value }))
    }

    const submitNewPassword = async (email: string) => {
        const { newPassword, confirmPassword } = password

        if (newPassword !== confirmPassword) {
            swal("Passwords do not match")
            return
        }
        setIsLoad(true)
        try {
            const response = await api.post('/api/new-password', { email, newPassword })
            swal(response.data.message)
            navigate("/admin/sub-admin/login")
        } catch (error: any) {
            swal(error.response.data.message);
        } finally {
            setIsLoad(false)
        }
    }
    return { submitNewPassword, handlePasswordChange, isLoad, password }
}

export default useNewPassword