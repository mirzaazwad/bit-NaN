"use client";
import { useEffect } from "react";
import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import { useAppSelector } from "../../../stores/redux-store";
import GoalsHelper from "../../../utils/helpers/goalsHelper";
import DailyGoals from "../components/DailyGoals";
import MonthlyGoals from "../components/MonthlyGoals";
import SideNavGoals from "../components/SideNavGoals";

const GoalsPage = () => {

    const activeTab = useAppSelector(state => state.goal?.layoutType);

    const renderGoals = () => {
        return (activeTab === "daily") ? <DailyGoals /> : <MonthlyGoals />;
    }    

    const fetchGoals = async () => {
        await GoalsHelper.fetchGoalsByUser();
    }

    useEffect(()=>{
        fetchGoals();
    }, []);
    
    return(
       <AuthenticatedLayout>
         <div className="flex w-full min-h-screen">
            <div className="flex flex-row w-full h-full">
                <div className="flex w-1/4">
                    
                </div>
                <div className="flex w-1/2 w-full">
                    <div className="p-4 w-full">
                    {renderGoals()}
                    </div>
                </div>
                <div className="flex w-1/4">
                    <SideNavGoals />
                </div>
            </div>
        </div>
       </AuthenticatedLayout>
    );
}

export default GoalsPage;