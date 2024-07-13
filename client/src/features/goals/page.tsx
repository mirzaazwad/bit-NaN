"use client";
import { useAppSelector } from "../stores/redux-store";
import DailyGoals from "./components/DailyGoals";
import MonthlyGoals from "./components/MonthlyGoals";
import SideNavGoals from "./components/SideNavGoals";

const Goals = () => {

    const activeTab = useAppSelector(state => state.goal?.layoutType);

    const renderGoals = () => {
        return (activeTab === "daily") ? <DailyGoals /> : <MonthlyGoals />;
    }    
    
    return(
        <>
        <div className="flex w-full min-h-screen">
            <div className="flex flex-row w-full h-full">
                <div className="flex w-1/4">
                    <SideNavGoals />
                </div>
                <div className="flex w-1/2 w-full">
                    <div className="p-4 w-full">
                    {renderGoals()}
                    </div>
                </div>
                <div className="flex w-1/4"></div>
            </div>
        </div>
        </>
    );
}

export default Goals;