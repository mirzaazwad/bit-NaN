import { homneScreen } from "../config/theme/global.theme";
import RegisterCard from "./components/signup";

const RegisterPage = () => {
    return ( 
        <main className={homneScreen}>
            <div className="w-full flex justify-center items-center">
                <RegisterCard/>
            </div>
        </main>
     );
}
 
export default RegisterPage;