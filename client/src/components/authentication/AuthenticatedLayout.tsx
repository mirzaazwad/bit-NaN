import Footer from "../footer/Footer";
import NavBarLoggedIn from "../navbar/NavBarLoggedIn";

const AuthenticatedLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return ( 
        <div className="min-h-screen h-screen flex flex-col w-full">
            <NavBarLoggedIn/>
            <main className="flex-grow pt-28">
                {children}
            </main>
            <Footer/>
        </div>
     );
}
 
export default AuthenticatedLayout;