import { useState } from 'react';
import swal from 'sweetalert';
import api from '../../../../lib/api';

const useResetPassword = () => {
    const [email, setEmail] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [isOtp, setIsOtp] = useState<boolean>(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await api.post('/api/reset-password', {email})
            setIsOtp(true)
            setEmail("")
            swal(response.data,"success")
        } catch (error: any) {
            swal(error.response.data.message || "Email Submitting Failed")
        } finally {
            setLoading(false)
        }
    }

    return { handleEmailSubmit, handleChange, email, loading, isOtp }
}

export default useResetPassword