import { Footer } from "rsuite";
import NavBar from "../../../components/navbar/NavBar";

const AuthenticationLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return ( 
        <div className="w-full">
            <NavBar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default AuthenticationLayout;