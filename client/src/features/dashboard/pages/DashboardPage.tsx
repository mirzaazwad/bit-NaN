import { useEffect } from "react";
import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import GoalsHelper from "../../../utils/helpers/goalsHelper";
import { GoalMinimal } from "../components/goals/GoalMinimal";
import Profile from "../components/profile/Profile";
import ProgresWrapper from "../components/progress/ProgressWrapper.component";
const DashboardPage = () => {

  const fetchGoals = async () => {
    await GoalsHelper.fetchGoalsByUser();
  }

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <AuthenticatedLayout>
      <div className="flex md:flex-row flex-col">
        <div className="p-2 lg:w-1/2 w-full"><Profile /></div>
        <div className="p-2 lg:w-1/2 w-full"><ProgresWrapper /></div>
      </div>
      <div className="p-2 w-full">
        <GoalMinimal />
      </div>
    </AuthenticatedLayout>
  );
}

export default DashboardPage;