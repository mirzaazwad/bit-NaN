import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from "rsuite";
import { Provider } from "react-redux";
import { appStore } from "../stores/redux-store";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className={`w-full bg-white overflow-x-hidden`}>
        <Provider store={appStore}>
          <NavBar/>
          <CustomProvider>{children}</CustomProvider>
          <Footer/>
        </Provider>
      </div>
  );
}
