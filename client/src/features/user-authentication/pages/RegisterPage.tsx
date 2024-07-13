import { homneScreen } from "../../../config/theme/global.theme";
import RegisterCard from "../components/signup";
import AuthenticationLayout from "../../../components/authentication/UnAuthenticatedLayout";


const RegisterPage = () => {
    return (
        <AuthenticationLayout>
            <main className={homneScreen}>
                <div className="w-full flex justify-center items-center">
                    <RegisterCard />
                </div>
            </main>
        </AuthenticationLayout>
    );
}

export default RegisterPage;