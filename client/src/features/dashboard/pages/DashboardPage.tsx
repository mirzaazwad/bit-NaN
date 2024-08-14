import { useEffect } from "react";
import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import GoalsHelper from "../../../utils/helpers/goalsHelper";
import { GoalMinimal } from "../components/goals/GoalMinimal";
import Profile from "../components/profile/Profile";
import ProgresWrapper from "../components/progress/ProgressWrapper.component";
import { Placeholder, Tabs } from "rsuite";
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
      <Tabs defaultActiveKey="1" appearance="subtle">
        <Tabs.Tab eventKey="1" title="In Progress Tasks">
          <div className="p-2 w-full">
            <GoalMinimal />
          </div>
        </Tabs.Tab>
        <Tabs.Tab eventKey="2" title="Saved Forum Posts">
          <Placeholder.Paragraph graph="square" />
        </Tabs.Tab>
        <Tabs.Tab eventKey="3" title="Saved Notes">
          <Placeholder.Paragraph graph="circle" />
        </Tabs.Tab>
      </Tabs>
    </AuthenticatedLayout>
  );
}

export default DashboardPage;