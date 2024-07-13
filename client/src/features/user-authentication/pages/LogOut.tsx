import { useEffect, useState } from "react";
import AuthHelper from "../../../utils/helpers/authHelper";
import { useNavigate } from "react-router-dom";

const LogOut = () => {

    const [loading,setLoading]=useState(true);
    const navigate=useNavigate();
    useEffect(()=>{
        AuthHelper.logout().then((res)=>{
            setLoading(!res);
            navigate("/");
        })
    },[loading])


    return ( <></> );
}
 
export default LogOut;