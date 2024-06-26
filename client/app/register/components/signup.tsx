"use client";
import Link from "next/link";
import PasswordStrengthBar from "react-password-strength-bar";
import { useRegister } from "../hooks/useRegister";
import Loading from "@/app/loading";
import { authenticationInputBox, authenticationInputBoxLabel, authenticationButton, authenticationCard, authenticationHyperLink, authenticationText } from "@/app/config/theme/authentication.theme";
import { tailwindError } from "@/app/config/theme/global.theme";
import { IonIcon } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";

const RegisterCard = () => {
  const { onSubmit, loading, errors, register, handleSubmit, watch, setStrength } = useRegister();
  if (loading) {
    return Loading();
  }
  return (
    <div className={authenticationCard()}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="text-xl font-medium text-black">Register</h5>
        {errors.submit && (
          <div className={tailwindError}>
            {errors.submit.message instanceof String ? errors.submit.message : "Server Error"}
          </div>
        )}
        <div>
          <label className={authenticationInputBoxLabel()}>
            Your username
          </label>
          <input
            type="username"
            placeholder={"someone"}
            {...register("username", { required: "Username is required" })}
            className={authenticationInputBox()}
          />
          {errors.username && (
            <div className={tailwindError}>
              Username must be present
            </div>
          )}
        </div>
        <div>
          <label className={authenticationInputBoxLabel()}>
            Your email
          </label>
          <input
            type="email"
            placeholder={"someone@example.com"}
            {...register("email", { required: "Email Address is required" })}
            className={authenticationInputBox()}
          />
          {errors.email && (
            <div className={tailwindError}>
              Invalid Email
            </div>
          )}
        </div>
        <div>
          <label className={authenticationInputBoxLabel()}>
            Your password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            {...register("password", { required: "Password is required" })}
            className={authenticationInputBox()}
          />
          {errors.password && (
            <div className={tailwindError}>
              Password should be of more than 8 characters, with at least one uppercase letter, one lowercase letter, one number and one special character
            </div>
          )}
          <PasswordStrengthBar
            password={watch("password")}
            onChangeScore={(score, feedback) => setStrength(score)}
          />
        </div>
        <div>
          <label className={authenticationInputBoxLabel()}>
            Confirm your password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            {...register("confirmPassword", {
              required: "Password Confirmation is required",
              validate: (value: any) =>
                value === watch("password") || "Passwords do not match",
            })}
            className={authenticationInputBox()}
          />
          {errors.confirmPassword && (
            <div className={tailwindError}>
              Passwords Do Not Match
            </div>
          )}
        </div>
        <button
          type="submit"
          className={authenticationButton()}
        >
          Register
        </button>
        <div className={authenticationText()}>
          Already Have an Account?{" "}
          <Link href={"/login"}>
            <button className={authenticationHyperLink()}>
              Login
            </button>
          </Link>
        </div>
        <button
          type="submit"
          className={authenticationButton()}
        >
          <span>Register with Google</span>
          <IonIcon icon={logoGoogle} className="ms-2 w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default RegisterCard;