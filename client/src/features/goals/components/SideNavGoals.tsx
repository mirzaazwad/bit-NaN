import { Button } from "rsuite";
import { SideNavButtonTheme } from "../../../config/theme/reusable.theme";
import { appStore, useAppSelector } from "../../../stores/redux-store";
import { goalActions } from "../../../stores/slices/goals-slice";
import { ModalControlUtils } from "../../../utils/helpers/modalHelper";
import { ModalName } from "../../../utils/enums/ModalEnums";

export default function SideNavGoals() {
    const setActiveTab = (tab: string): void => {
        appStore.dispatch(goalActions.setLayoutType(tab));
    }

    const activeTab = useAppSelector(state => state.goal?.layoutType);

    const handleCreateTask = () =>{
        ModalControlUtils.updateModalType(ModalName.GoalDetails)
    }

    return (
        <div className="flex flex-col h-64 w-full mr-1">
            <div className="flex flex-col w-full bg-gray-50 shadow-lg rounded-lg p-4">
                <div className="py-4">
                    <h3 className="font-bold text-2xl text-gray-800 mb-4">Current View</h3>
                    <hr className="border-gray-300" />
                </div>
                <div className="my-2">
                    <button
                        className={SideNavButtonTheme(activeTab, "daily")}
                        onClick={() => setActiveTab("daily")}
                    >
                        Daily
                    </button>
                </div>
                <div className="my-2">
                    <button
                        className={SideNavButtonTheme(activeTab, "monthly")}
                        onClick={() => setActiveTab("monthly")}
                    >
                        Monthly
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-50 shadow-lg rounded-lg p-4 mt-4">
                <Button
                    block
                    appearance="default"
                    className="transition duration-300 ease-in-out transform bg-gradient-to-r from-black to-blue-900 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:from-blue-900 hover:to-black"
                    onClick={handleCreateTask}
                    >
                    Create New Task
                </Button>
            </div>

        </div>
    );
}
