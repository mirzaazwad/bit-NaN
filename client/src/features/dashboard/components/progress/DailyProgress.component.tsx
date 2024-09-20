import { Tooltip, Whisper } from "rsuite";
import { TimerInfo } from "../../../../utils/templates/timer";
import { TimerControlUtils } from "../../../../utils/helpers/timerHelper";

const getColor = (focusTime: number): string => {
    if (focusTime >= 2.5) return "bg-amber-700"; 
    if (focusTime >= 2) return "bg-amber-600";
    if (focusTime >= 1.5) return "bg-amber-500";
    if (focusTime >= 1) return "bg-amber-400";
    if (focusTime >= 0.5) return "bg-amber-300";
    if (focusTime > 0) return "bg-amber-200";
    return "bg-gray-200";
};

const getDatesFor30Days = (): string[] => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 30; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        dates.push(date.toISOString().slice(0, 10));
    }
    return dates.reverse();
};

type Props = {
    timerData: TimerInfo[] | undefined;
}

const DailyProgress = (props:Props) => {

    const dates = getDatesFor30Days();
    const contributionsMap: { [key: string]: number } = {};

    if (props.timerData) {
        props.timerData.forEach((timer) => {
            const date = new Date(timer.time).toISOString().slice(0, 10); // Extract date part
            const focusTimeInHours = timer.focusTime / 3600;
            contributionsMap[date] = (contributionsMap[date] || 0) + focusTimeInHours;
        });
    }

    return (
        <>
            <div className="rounded-md shadow-md p-3 bg-white">
                <div className="text-xl font-semibold mr-1 my-2">Progress in last 30 days</div>
                <div className="grid grid-cols-7 gap-2 md:grid-cols-7 md:gap-2">
                    {[...Array(Math.ceil(dates.length / 7))].map((_, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-7 gap-1 md:grid-cols-7 md:gap-2">
                            {[...Array(7)].map((_, colIndex) => {
                                const dateIndex = rowIndex * 7 + colIndex;
                                if (dateIndex >= dates.length) return null; 
                                const date = dates[dateIndex];
                                const contributions = contributionsMap[date] || 0;
                                const colorClass = getColor(contributions);
                                const formattedFocusTime = TimerControlUtils.formatHour(contributions);

                                return (
                                    <div className="relative" key={colIndex}>
                                        <Whisper
                                            trigger="hover"
                                            placement="top"
                                            speaker={<Tooltip>{`Focus time: ${formattedFocusTime} on ${date}`}</Tooltip>}
                                        >
                                            <div
                                                className={`w-4 h-4 ${colorClass}`}
                                            >
                                            </div>
                                        </Whisper>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DailyProgress;
