import Footer from "../footer/Footer";
import NavBarLoggedIn from "../navbar/NavBarLoggedIn";

const AuthenticatedLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return ( 
        <div className="flex flex-col min-h-screen w-full">
            <NavBarLoggedIn/>
            <main className="flex-grow min-h-screen pt-48">
                {children}
            </main>
            <Footer/>
        </div>
     );
}
 
export default AuthenticatedLayout;