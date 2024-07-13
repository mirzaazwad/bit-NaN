import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { IRegister } from "../../../utils/templates/signup";
import { useNavigate } from "react-router-dom";
import AuthHelper from "../../../utils/helpers/authHelper";

export const useRegister = () => {
  const {
    register:hookRegister,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  hookRegister("submit");
  const navigate=useNavigate();

  const [strength, setStrength] = useState(0);
  const [loading, setLoading] = useState(false);

  const checkPassword = (password: string, confirmPassword: string) => {
    if (strength < 2) {
      setError("password", { type: "custom", message: "Password is weak" });
      return false;
    }
    if (confirmPassword !== password) {
      setError("confirmPassword", {
        type: "custom",
        message: "Passwords do not match",
      });
      return true;
    }
  };

  const onSubmit = async (data: FieldValues) => {
    if (checkPassword(data.password, data.confirmPassword)) {
      return;
    }
    setLoading(true);
    const { username, email, password } = data;
    const registerData: IRegister = {
      username,
      email,
      password,
    };
    try{
      const result = await AuthHelper.registerUser(registerData);
      if(!result.status){
        setError("submit", { type: "custom", message: result.message });
      }
      else{
        navigate("/dashboard");
      }
    }
    catch(error){
      console.log(error);
      setError("submit", { type: "custom", message: "Server Error" });
    }
    finally{
      setLoading(false);
    }
  };

  return {
    onSubmit,
    loading,
    errors,
    register:hookRegister,
    handleSubmit,
    watch,
    setStrength,
  };
};
