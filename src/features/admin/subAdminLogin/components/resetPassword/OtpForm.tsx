import { Button } from "../../../../../components/ui/button"
import { Input } from "../../../../../components/ui/input"

const OtpForm = ({ handleResendOtp, handleVarifyOtp, handleOtpChange, isLoading, otpValue, email }: any) => {
    return (
        <form
            onSubmit={handleVarifyOtp}
            autoComplete="off"
        >
            <div className="my-2">
                <Input
                    id="otp"
                    name="otp"
                    type="text"
                    value={otpValue || ""}
                    onChange={handleOtpChange}
                    className="text-center"
                    placeholder="Enter OTP"
                    maxLength={6}
                    autoFocus
                />
            </div>
            <button
                type="button"
                onClick={() => handleResendOtp(email)}
                className="mb-2 font-semibold">Resend OTP</button>
            <div>
                <Button
                    disabled={isLoading}
                    type="submit"
                    className="text-white text-lg py-6 px-6"
                >
                    {isLoading ? "Submitting..." : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default OtpForm