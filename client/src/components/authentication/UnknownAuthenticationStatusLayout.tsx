import { useAuth } from "../../hooks/general/useAuth";
import AuthenticatedLayout from "../authentication/AuthenticatedLayout";
import UnAuthenticatedLayout from "../authentication/UnAuthenticatedLayout";
import LoadingComponent from "../general/Loading";

const UnknownAuthenticationStatus = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const {auth,authCheckLoading}=useAuth();

    if(authCheckLoading){
      return <LoadingComponent/>
    }

    return auth?
            <AuthenticatedLayout>
                {children}
            </AuthenticatedLayout>
    :<UnAuthenticatedLayout>
        {children}
    </UnAuthenticatedLayout>
}
 
export default UnknownAuthenticationStatus;