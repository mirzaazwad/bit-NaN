import 'rsuite/dist/rsuite-no-reset.min.css';
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className={`w-full bg-white overflow-x-hidden`}>
          <NavBar/>
            {children}
          <Footer/>
      </div>
  );
}
