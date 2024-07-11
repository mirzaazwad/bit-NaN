"use client";
import { SideNavButtonTheme } from "@/app/config/theme/reusable.theme";
import { appStore, useAppSelector } from "@/app/stores/redux-store";
import { goalActions } from "@/app/stores/slices/goals-slice";

export default function SideNavGoals() {

    const setActiveTab = (tab:string) : void => {
        appStore.dispatch(goalActions.setLayoutType(tab));
    }

    const activeTab = useAppSelector(state => state.goal?.layoutType);
    return(
        <>
            <div className="flex h-full items-center justify-center w-full">
                <div className="flex flex-col w-full">
                    <div className="w-full">
                        <button
                            className={SideNavButtonTheme(activeTab, "daily")}
                            onClick={() => setActiveTab("daily")}
                        >
                            Daily
                        </button>
                    </div>
                    <div className="w-full">
                        <button
                            className={SideNavButtonTheme(activeTab, "monthly")}
                            onClick={() => setActiveTab("monthly")}
                        >
                            Monthly
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}