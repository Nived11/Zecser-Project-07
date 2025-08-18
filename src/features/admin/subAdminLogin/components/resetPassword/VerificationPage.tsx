import useNewPassword from "../../hooks/useNewPassword"
import useResentOtp from "../../hooks/useResentOtp"
import useResetPassword from "../../hooks/useResetPassword"
import useVarifyOtp from "../../hooks/useVarifyOtp"
import EmailForm from "./EmailForm"
import NewPasswordForm from "./NewPasswordForm"
import OtpForm from "./OtpForm"

const VerificationPage = () => {
    const { handleEmailSubmit, handleChange, email, loading, isOtp } = useResetPassword()
    const { handleVarifyOtp, handleOtpChange, isLoading, otpValue, isNewPassword } = useVarifyOtp()
    const { handleResendOtp } = useResentOtp()
    const { submitNewPassword, handlePasswordChange, isLoad, password } = useNewPassword()
    const handlePassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submitNewPassword(email || "")
    }

    return (
        <div
            className="my-6 px-6">
            <h2 className="text-2xl text-blue-950 font-bold text-center">Login</h2>
            <div
                className="max-w-[600px] mx-auto w-full my-6 shadow-[3px_4px_3px_rgb(0,0,0,0.1),inset_1px_3px_3px_rgb(0,0,0,0.1)] rounded-md px-10 py-6 text-center"
            >

                <h2 className="text-2xl font-bold m-2">{isNewPassword ? "Submit New Password" : isOtp ? "Submit OTP" : "Reset Password"}</h2>
                <p className="font-semibold p-2">{!isOtp && !isNewPassword && "Enter your registered email address"}</p>

                {
                    isNewPassword ?
                        <NewPasswordForm
                            handlePassword={handlePassword}
                            handlePasswordChange={handlePasswordChange}
                            loading={isLoad}
                            password={password}
                        />
                        : !isOtp ?
                            <EmailForm
                                handleEmailSubmit={handleEmailSubmit}
                                handleChange={handleChange}
                                loading={loading}
                                email={email}
                            />
                            :
                            <OtpForm
                                handleResendOtp={handleResendOtp}
                                handleVarifyOtp={handleVarifyOtp}
                                handleOtpChange={handleOtpChange}
                                isLoading={isLoading}
                                otpValue={otpValue}
                                email={email}
                            />

                }
            </div>
        </div>
    )
}

export default VerificationPage