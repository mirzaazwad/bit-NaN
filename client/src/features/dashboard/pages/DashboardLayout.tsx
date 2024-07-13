import Footer from "../../../components/footer/Footer";
import NavBarLoggedIn from "../../../components/navbar/NavBarLoggedIn";

const DashboardLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return ( 
        <div className="flex flex-col min-h-screen w-full">
            <NavBarLoggedIn/>
            <main className="flex-grow min-h-screen">
                {children}
            </main>
            <Footer/>
        </div>

     );
}
 
export default DashboardLayout;