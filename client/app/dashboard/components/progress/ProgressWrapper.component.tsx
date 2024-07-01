"use client";
import { HeaderBarTheme } from "@/app/config/theme/profile.theme";
import WeeklyProgress from "./WeeklyProgress.component";
import DailyProgress from "./DailyProgress.component";

const ProgresWrapper = () => {
    return(

        <div className="rounded mt-1">
            <div className={HeaderBarTheme}><h3 className="font-semibold text-xl text-white">Progress</h3></div>
            <div className="w-full h-full flex items-center justify-center mt-4">
                <div className="flex flex-col min-w-full">
                    <WeeklyProgress days={5}/>
                    <DailyProgress/>
                </div>
            </div>
        </div>
    )
}

export default ProgresWrapper;