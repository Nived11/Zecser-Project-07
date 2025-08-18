import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import useAdminLogin from "../hooks/useAdminLogin";
import type { AdminProps } from "./SubAdminLoginPage";



const LoginForm = ({ admin }: AdminProps) => {
    const navigate = useNavigate()
    const { handleChange, handleSubmit, formData, loading, errors } = useAdminLogin();
    const { email, password } = formData

    const resetPassword = () => {
        navigate('/sub-admin/reset-password')
    }
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center p-2">Login</h2>
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="max-w-[1000px] mx-auto p-4 rounded-lg "
            >
                <div className="my-2">
                    <label htmlFor="email" className="text-xl font-semibold">
                        E-mail
                    </label>
                    <Input
                        onChange={handleChange}
                        value={email}
                        type="email"
                        name="email"
                        placeholder="Enter your Email "
                        className="my-2"
                        required
                    />
                    {errors.email && <p className="text-red-600">{errors.email} </p>}
                </div>
                <div className="my-2">
                    <label htmlFor="password" className="text-xl font-semibold">
                        Password
                    </label>
                    <Input
                        value={password}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="my-2"
                        required
                    />
                    {errors.password && <p className="text-red-600">{errors.password} </p>}
                </div>
                {
                    !admin &&
                    <>
                        <button
                            onClick={resetPassword}
                            type="button"
                            className="text-blue-950 font-semibold"
                        >
                            Forgot Password?
                        </button>

                    </>
                }
                <div className="flex justify-center">
                    <Button
                        type="submit"
                        className="py-6 px-10 bg-blue-950 rounded-md text-white "
                    disabled={loading || !email || !password}
                    >
                        {loading ? "Logging in..." : "Submit"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
