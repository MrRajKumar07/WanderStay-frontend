// src/pages/auth/Login.jsx

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { loginUser } from "../../api/authApi";
import { useToast } from "../../context/ToastContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { showToast } = useToast();

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);

      const { accessToken, role } = res;

      // ✅ store auth data
      localStorage.setItem("token", accessToken);
      localStorage.setItem("role", role);

      showToast("Login successful", "success");

      navigate("/");
    } catch (err) {
      console.error("Login error:", err);

      showToast(
        err.response?.data?.message || err.message || "Login failed",
        "error"
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 p-6 shadow rounded-lg flex flex-col gap-4"
      >
        <h1 className="text-xl font-bold text-center">Login</h1>

        <Input
          label="Email"
          name="email"
          register={register}
          error={errors.email}
          rules={{ required: "Email is required" }}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          register={register}
          error={errors.password}
          rules={{ required: "Password is required" }}
        />

        <Button type="submit">Login</Button>

        <p className="text-sm text-center">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;