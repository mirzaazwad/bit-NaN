import Footer from "@/app/components/footer/Footer";
import NavBar from "../components/navbar/NavBar";

const DashboardLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return ( 
        <div className="flex flex-col min-h-screen w-full">
            <NavBar/>
            <main className="flex-grow min-h-screen">
                {children}
            </main>
            <Footer/>
        </div>

     );
}
 
export default DashboardLayout;