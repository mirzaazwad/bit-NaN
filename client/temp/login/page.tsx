import { homneScreen } from "../config/theme/global.theme";
import LoginCard from "./components/login";

const LoginPage = () => {
    return ( 
        <main className={homneScreen}>
            <div className="w-full flex justify-center items-center">
                <LoginCard/>
            </div>
        </main>
     );
}
 
export default LoginPage;