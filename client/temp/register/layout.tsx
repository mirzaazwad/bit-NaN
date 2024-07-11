import Footer from "@/app/components/footer/Footer";
import NavBar from "../components/navbar/NavBar";

const RegisterLayout = ({
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
 
export default RegisterLayout;