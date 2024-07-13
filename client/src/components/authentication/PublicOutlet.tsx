import { Outlet,Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/general/useAuth";


const PublicOutlet = () => {

    const {auth}=useAuth();

    return !auth? <Outlet/> : <Navigate to="/dashboard"/>;
}
 
export default PublicOutlet;