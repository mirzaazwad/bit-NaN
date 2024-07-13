import Footer from "../../../components/footer/Footer";
import NavBarLoggedIn from "../../../components/navbar/NavBarLoggedIn";


const GoalsLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return ( 
        <div className="flex flex-col min-h-screen w-full">
            <NavBarLoggedIn/>
            <main className="flex-grow min-h-screen pt-32">
                {children}
            </main>
            <Footer/>
        </div>

     );
}
 
export default GoalsLayout;