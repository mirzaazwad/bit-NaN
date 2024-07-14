import { Outlet,Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/general/useAuth";
import LoadingComponent from "../general/Loading";


const PrivateOutlet = () => {

    const {auth,authCheckLoading}=useAuth();

    if(authCheckLoading){
        return <LoadingComponent/>
    }

    return auth? <Outlet/> : <Navigate to="/login"/>;
}
 
export default PrivateOutlet;