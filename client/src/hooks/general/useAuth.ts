import { useEffect, useState } from "react";
import { useAppSelector } from "../../stores/redux-store";
import AuthHelper from "../../utils/helpers/authHelper";

export const useAuth=()=>{
    const auth=useAppSelector((state)=>state.auth.auth);
    const [authCheckLoading,setAuthCheckLoading]=useState(false);

    const checkAuthenticationStatus=async()=>{
        setAuthCheckLoading(true);
        const access=localStorage.getItem("access");
        const refresh=localStorage.getItem("refresh");
        if(access){
            const verified=await AuthHelper.verifyToken();
            if(verified){
                setAuthCheckLoading(false);
                return;
            }
        }
        if(refresh){
            const found=await AuthHelper.getNewToken();
            if(found){
                setAuthCheckLoading(false);
                return;
            }
        }
        setAuthCheckLoading(false);
        
    }
    
    useEffect(()=>{
        checkAuthenticationStatus();
    },[])
    

    return {auth,authCheckLoading};
}