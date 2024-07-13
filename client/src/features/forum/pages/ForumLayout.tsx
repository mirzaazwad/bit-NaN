import Footer from "../../../components/footer/Footer";
import NavBar from "../../../components/navbar/NavBarLoggedIn";


const ForumLayout = ({
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
 
export default ForumLayout;