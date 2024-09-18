import { useEffect, useState } from "react";
import { HeaderBarTheme } from "../../../../config/theme/reusable.theme";
import { TimerControlUtils } from "../../../../utils/helpers/timerHelper";
import DailyProgress from "./DailyProgress.component";
import Progress from "./Progress";
import { TimerInfo } from "../../../../utils/templates/timer";
import { useAppSelector } from "../../../../stores/redux-store";

const ProgresWrapper = () => {

    const modal = useAppSelector((state) => state.modal);

    const [timerData, setTimerData] = useState<TimerInfo[]>()
    const [dailyHours, setDailyHours] = useState<number>(0);

    const fetchTimerInfo = async () => {
        const res = await TimerControlUtils.fetchTimerInfo();
        setTimerData(res);
    }

    const fetchDailyTimerInfo = async () => {
        const data = await TimerControlUtils.returnTimerHoursToday();
        setDailyHours(data);
    }

    useEffect(() => {
        fetchDailyTimerInfo();
        fetchTimerInfo();
    }, [modal]);

    return(
        <div className="rounded mt-1">
            <div className={HeaderBarTheme}><h3 className="font-semibold text-xl text-white">User Progress</h3></div>
            <div className="w-full h-full flex items-center justify-center mt-2">
                <div className="flex flex-col min-w-full">
                    <Progress hours={dailyHours} goal={1.5}/>
                    <DailyProgress/>
                </div>
            </div>
        </div>
    )
}

export default ProgresWrapper;