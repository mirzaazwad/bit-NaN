import { useAuth } from "../../hooks/general/useAuth";
import AuthenticatedLayout from "../authentication/AuthenticatedLayout";
import UnAuthenticatedLayout from "../authentication/UnAuthenticatedLayout";

const UnknownAuthenticationStatus = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const {auth}=useAuth();
    return auth?
            <AuthenticatedLayout>
                {children}
            </AuthenticatedLayout>
    :<UnAuthenticatedLayout>
        {children}
    </UnAuthenticatedLayout>
}
 
export default UnknownAuthenticationStatus;