import Footer from "../footer/Footer";
import NavBarLoggedIn from "../navbar/NavBarLoggedIn";

const AuthenticatedLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return ( 
        <div className="main-wrapper flex flex-col min-h-screen w-full">
            <NavBarLoggedIn/>
            <main className="flex-grow min-h-screen pt-28">
                {children}
            </main>
            <Footer/>
        </div>
     );
}
 
export default AuthenticatedLayout;