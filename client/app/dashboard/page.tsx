"use client";
import NavBar from "../components/navbar-main/navbar";
import Profile from "../components/profile/Profile";
import ProgresWrapper from "../components/progress/ProgressWrapper.component";
const Dashboard = () => {
  return (
        <div className="pt-12">
            <div className="flex flex-row pt-16">
                <div className="p-2 w-1/2"><ProgresWrapper/></div>
                <div className="p-2 w-1/2"><Profile/></div>
            </div>

        </div>
  );
}

export default Dashboard;