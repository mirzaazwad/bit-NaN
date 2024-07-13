import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../stores/redux-store";

export const useAuth=()=>{
    // const auth=useAppSelector((state)=>state.auth);
    // const dispatch=useAppDispatch();

    // const setAuth=(e:boolean)=>{
        
    // }
    const [auth,setAuth]=useState(false);

    return {auth,setAuth};
}