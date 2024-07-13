import { useState } from "react";
import { login } from "../../../lib/authentication.requests";
import { FieldValues, useForm } from "react-hook-form";
import { ILogin } from "../../../utils/templates/login";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const loginData: ILogin = {
        email: data.email,
        password: data.password,
      };

      const result = await login(loginData);
      console.log(result);
      if (result.err) {
        handleLoginError(result.status);
      } else {
        handleLoginSuccess(result);
      }
    } catch (error) {
      setError("submit", { type: "custom", message: "Server Error" });
    } finally {
      setLoading(false);
    }
  };

  const handleLoginError = (status: number) => {
    const errorMessage = status !== 500 ? "Invalid Email or Password" : "Server Error";
    setError("submit", { type: "custom", message: errorMessage });
  };

  const handleLoginSuccess = (result: any) => {
    localStorage.setItem("access", result.access);
    localStorage.setItem("refresh", result.refresh);
    // router.push("/users");
  };

  return { onSubmit, loading, errors, register, handleSubmit };
};