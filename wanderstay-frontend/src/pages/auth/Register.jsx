// src/pages/auth/Register.jsx

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { registerUser } from "../../api/authApi";

import api from "../../api/axiosInstance";
import { useToast } from "../../context/ToastContext";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const onSubmit = async (data) => {
    try {
      const res = await registerUser(data);

      const { accessToken, role } = res.data;

      localStorage.setItem("token", accessToken);
      localStorage.setItem("role", role);

      showToast("Registered successfully", "success");

      navigate("/");
    } catch (err) {
      showToast(
        err.response?.data?.message || "Registration failed",
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
        <h1 className="text-xl font-bold text-center">Register</h1>

        <Input label="First Name" name="firstName" register={register} error={errors.firstName} />
        <Input label="Last Name" name="lastName" register={register} error={errors.lastName} />
        <Input label="Email" name="email" register={register} error={errors.email} />
        <Input label="Password" type="password" name="password" register={register} error={errors.password} />

        <Button type="submit">Register</Button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;