import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ILogin } from "../../../utils/templates/login";
import { useNavigate } from "react-router-dom";
import AuthHelper from "../../../utils/helpers/authHelper";
import { IAuthResponseType } from "../../../utils/templates/AuthResponseType";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const loginData: ILogin = {
        email: data.email,
        password: data.password,
      };

      const result:IAuthResponseType = await AuthHelper.loginUser(loginData);
      if(!result.status){
        setError("submit", { type: "custom", message: result.message });
      }
      else{
        navigate('/dashboard');
      }
      
    } catch (error) {
      console.log(error);
      setError("submit", { type: "custom", message: "Server Error" });
    } finally {
      setLoading(false);
    }
  };


  return { onSubmit, loading, errors, register, handleSubmit };
};