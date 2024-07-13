import { Outlet,Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/general/useAuth";


const PrivateOutlet = () => {

    const {auth}=useAuth();

    return auth? <Outlet/> : <Navigate to="/login"/>;
}
 
export default PrivateOutlet;