import swal from "sweetalert";
import { useState } from "react";
import api from "../../../../lib/api";

const useVarifyOtp = () => {
    const [otpValue, setOtpValue] = useState<string | null>(null)
    const [isNewPassword, setIsNewPassword] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtpValue(e.target.value)
    }

    const handleVarifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const response = await api.post("/api/varify/otp", { otp: otpValue })
            setIsNewPassword(true)
            setOtpValue("")
            swal(response.data.message || "Correct OTP")
        } catch (error: any) {
            setOtpValue("")
            swal(error.response.data.message || "OTP is wrong")
        } finally {
            setIsLoading(false)
        }
    }
    return { handleVarifyOtp, handleOtpChange, isLoading, otpValue, isNewPassword }
}

export default useVarifyOtp