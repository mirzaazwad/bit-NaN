import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import Profile from "../components/profile/Profile";
import ProgresWrapper from "../components/progress/ProgressWrapper.component";
const DashboardPage = () => {
  return (
        <AuthenticatedLayout>
          <div className="flex md:flex-row flex-col">
                <div className="p-2 lg:w-1/2 w-full"><Profile/></div>
                <div className="p-2 lg:w-1/2 w-full"><ProgresWrapper/></div>
            </div>
        </AuthenticatedLayout>
  );
}

export default DashboardPage;