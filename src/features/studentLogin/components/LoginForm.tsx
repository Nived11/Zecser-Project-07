import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import useLogin from "../hooks/useLogin";

const LoginForm = () => {
  const { handleChange, handleSubmit, formData, loading, errors } = useLogin();
  const { admissionNumber, password } = formData
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center p-2">Login</h2>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="max-w-[1000px] mx-auto p-4 rounded-lg "
      >
        <div className="my-2">
          <label htmlFor="admissionNumber" className="text-xl font-semibold">
            Admission Number
          </label>
          <Input
            onChange={handleChange}
            value={admissionNumber}
            type="text"
            name="admissionNumber"
            placeholder="Enter your Admission Number "
            className="my-2"
            required
          />
          {errors.admissionNumber && <p className="text-red-600">{errors.admissionNumber} </p>}
        </div>
        <div className="my-2">
          <label htmlFor="password" className="text-xl font-semibold">
            Password
          </label>
          <Input
            value={password}
            onChange={handleChange}
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            className="my-2"
            required
          />
          {errors.password && <p className="text-red-600">{errors.password} </p>}
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="py-6 px-10 bg-blue-950 rounded-md text-white"
          disabled={loading || !admissionNumber || !password}
          >
            {loading ? "Logging in..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
