import Profile from "./components/profile/Profile";
import ProgresWrapper from "./components/progress/ProgressWrapper.component";
const Dashboard = () => {
  return (
        <div className="pt-12">
            <div className="flex md:flex-row flex-col pt-16">
                <div className="p-2 lg:w-1/2 w-full"><Profile/></div>
                <div className="p-2 lg:w-1/2 w-full"><ProgresWrapper/></div>
            </div>

        </div>
  );
}

export default Dashboard;