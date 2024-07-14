import { SideNavButtonTheme } from "../../../config/theme/reusable.theme";
import { appStore, useAppSelector } from "../../../stores/redux-store";
import { goalActions } from "../../../stores/slices/goals-slice";

export default function SideNavGoals() {
    const setActiveTab = (tab: string): void => {
        appStore.dispatch(goalActions.setLayoutType(tab));
    }

    const activeTab = useAppSelector(state => state.goal?.layoutType);

    return (
        <div className="flex h-64 w-full mr-1">
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
        </div>
    );
}
