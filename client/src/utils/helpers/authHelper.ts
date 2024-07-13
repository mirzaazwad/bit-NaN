import { API_ROUTES } from "../../api/apiRoutes";
import { appStore } from "../../stores/redux-store";
import { authActions } from "../../stores/slices/auth-slide";
import {postData } from "../common/apiCall";
import { IAuthResponseType } from "../templates/AuthResponseType";
import { ILogin } from "../templates/login";
import { IRegister } from "../templates/signup";

class AuthHelper{
    static async loginUser(body:ILogin): Promise<IAuthResponseType> {
        const response = await postData(API_ROUTES.auth.login,body);
        if(response?.error){
            return {
                status:false,
                message:response.error
            } as IAuthResponseType;
        }
        console.log(response);
        this.setData(response.data.access, authActions.setAccessToken);
        this.setData(response.data.refresh, authActions.setRefreshToken);
        this.setData(true, authActions.setAuthStatus);
        return {
            status:true,
            message:"Successfully Logged In"
        } as IAuthResponseType;
    }

    static async registerUser(body:IRegister): Promise<IAuthResponseType> {
        const response = await postData(API_ROUTES.auth.register,body);
        if(response?.error){
            return {
                status:false,
                message:response.error
            } as IAuthResponseType;
        }
        this.setData(response.data.access, authActions.setAccessToken);
        this.setData(response.data.refresh, authActions.setRefreshToken);
        this.setData(true, authActions.setAuthStatus);
        return {
            status:true,
            message:"Successfully Logged In"
        } as IAuthResponseType;
        
    }

    static async getNewToken():Promise<boolean>{
        const response=await postData(API_ROUTES.auth.refresh,{
            refresh:localStorage.getItem("refresh")
        });
        if(response?.error){
            console.log(response.error);
            this.setData(false, authActions.setAuthStatus);
            localStorage.clear();
            return false;
        }
        if(response.data.access){
            this.setData(response.data.access, authActions.setAccessToken);
            this.setData(true, authActions.setAuthStatus);
            return true;
        }
        localStorage.clear();
        this.setData(false, authActions.setAuthStatus);
        return false;
    }

    static async verifyToken():Promise<boolean>{
        const response=await postData(API_ROUTES.auth.verify,{
            access:localStorage.getItem("access")
        });
        if(response?.error){
            console.log(response.error);
            this.setData(false, authActions.setAuthStatus);
            localStorage.clear();
            return false;
        }
        if(response.data.verified){
            this.setData(true, authActions.setAuthStatus);
            return true;
        }
        this.setData(false, authActions.setAuthStatus);
        localStorage.clear();
        return false;
    }

    static async logout():Promise<boolean>{
        await postData(API_ROUTES.auth.logout,{});
        localStorage.clear();
        this.setData(false,authActions.setAuthStatus);
        return true;
    }

    static setData<T>(data: T, actionCreator: (data: T) => any): void {
        appStore.dispatch(actionCreator(data));
    }
}

export default AuthHelper;