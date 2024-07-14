import { Footer } from "rsuite";
import NavBar from "../navbar/NavBar";

const UnAuthenticatedLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return ( 
        <div className="w-full bg-white overflow-x-hidden">
            <NavBar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default UnAuthenticatedLayout;