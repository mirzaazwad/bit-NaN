import Footer from "@/app/components/footer/Footer";
import NavBar from "../components/navbar/NavBar";

const LoginLayout = ({
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
 
export default LoginLayout;