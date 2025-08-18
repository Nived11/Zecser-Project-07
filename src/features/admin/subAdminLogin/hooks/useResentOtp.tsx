import swal from "sweetalert";
import api from "../../../../lib/api";

const useResentOtp = () => {
    const handleResendOtp = async (email: string | null) => {
        if (!email) {
            swal("Please Enter a valid email")
            return
        }

        try {
            const response = await api.post('/api/resend-otp', { email })
            swal(response.data.message)

        } catch (error: any) {
            swal(error.response.data.message)
        }
    }
    return { handleResendOtp }
}

export default useResentOtp