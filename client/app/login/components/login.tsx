"use client";
import Loading from "@/app/loading";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";
import { authenticationInputBox, authenticationInputBoxLabel,authenticationButton,authenticationCard,authenticationHyperLink,authenticationText } from "@/app/config/theme/authentication.theme";
import { tailwindError } from "@/app/config/theme/global.theme";
import { IonIcon } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";

const LoginCard = () => {
  const {onSubmit,loading,errors,register,handleSubmit}=useLogin();

  if(loading){
    Loading();
  }

  return (
    <div className={authenticationCard()}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="text-xl font-medium text-black">Login</h5>
        {errors.submit && (
            <div className={tailwindError}>
                {errors.submit.message instanceof String?errors.submit.message:"Server Error"}
            </div>
        )}
        <div>
          <label className={authenticationInputBoxLabel()}>
            Your email
          </label>
          <input
            type="email"
            placeholder={"someone@example.com"}
            {...register("email",{ required: "Email Address is required" })}
            className={authenticationInputBox()}
          />
          {errors.email && (
            <div className={tailwindError}>
              {errors.email.message instanceof String?errors.email.message:"Invalid Email"}
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
            {...register("password",{ required: "Password is required" })}
            className={authenticationInputBox()}
          />
          {errors.password && (
          <div className={tailwindError}>
            {errors.password.message instanceof String?errors.password.message:"Invalid Email"}
          </div>
        )}
        </div>
        <button
          type="submit"
          className={authenticationButton()}
        >
          Login to your account
        </button>
        <div className={authenticationText()}>
          Not registered?{" "}
          <Link href={"/register"}>
          <button className={authenticationHyperLink()}>
            Create account
          </button>
          </Link>
        </div>
        <button
          type="submit"
          className={authenticationButton()}
        >
          <span>Login with Google</span>
          <IonIcon icon={logoGoogle} className="ms-2 w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default LoginCard;