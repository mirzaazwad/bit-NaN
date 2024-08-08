import { useEffect } from "react";
import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import { appStore, useAppSelector } from "../../../stores/redux-store";
import {loaderActions} from "../../../stores/slices/loader-slice";
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
        try{
            appStore.dispatch(loaderActions.turnOn());
            await GoalsHelper.fetchGoalsOfToday();
            await GoalsHelper.fetchGoalsByUser();
        }catch(error){
            console.log(error);
        }finally{
            appStore.dispatch(loaderActions.turnOff());
        }
        
    }

    useEffect(() => {
        fetchGoals();
    }, []);

    return (
        <AuthenticatedLayout>
            <div className="flex w-full min-h-screen">
                <div className="flex flex-col w-full ">
                    {activeTab === "daily" ? (
                        <div className="flex w-full items-center justify-center">
                            <div className="text-center p-4 bg-white shadow-lg rounded-lg">
                                <p className="text-3xl text-blue-500 font-bold">{new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                    ) : (<></>)}
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
            </div>
        </AuthenticatedLayout>
    );
}

export default GoalsPage;