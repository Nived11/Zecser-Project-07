import { Button } from "../../../../../components/ui/button"
import { Input } from "../../../../../components/ui/input"

const NewPasswordForm = ({ handlePassword, handlePasswordChange, loading, password }: any) => {
    
    const {newPassword,confirmPassword}=password
    const isMismatch=newPassword!==confirmPassword
    return (
        <form
            className="text-left font-semibold"
            onSubmit={handlePassword}
        >
            <div>
                <label htmlFor="newPassword">New Password</label>
                <Input
                    id="newPassword"
                    name="newPassword"
                    value={password.newPassword || ""}
                    onChange={handlePasswordChange}
                    placeholder="Enter New password"
                    type="password"
                    required
                    className="my-2"
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    value={password.confirmPassword || ""}
                    onChange={handlePasswordChange}
                    placeholder="Enter Confirm password"
                    type="password"
                    required
                    className="my-2"

                />
            </div>
            <div className="text-center w-full">
                <Button
                    disabled={loading || isMismatch}
                    type="submit"
                    className="text-white text-lg py-6 px-6 "
                >
                    {loading ? "Submitting" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default NewPasswordForm