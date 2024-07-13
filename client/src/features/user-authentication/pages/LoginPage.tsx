import { homneScreen } from "../../../config/theme/global.theme";
import LoginCard from "../components/login";
import UnAuthenticatedLayout from "../../../components/authentication/UnAuthenticatedLayout";


const LoginPage = () => {
    return (
        <UnAuthenticatedLayout>
            <main className={homneScreen}>
                <div className="w-full flex justify-center items-center">
                    <LoginCard />
                </div>
            </main>
        </UnAuthenticatedLayout>
    );
}

export default LoginPage;