"use client";
import ProgressLine from "rsuite/esm/Progress/ProgressLine";

const WeeklyProgress = ({days}: {days: number}) => {
    const percent = (days/7) * 100;
    return(
        <>
            <div className="flex flex-row px-2 py-1">
                <div className="font-semibold text-lg text-black w-1/3">Streak (In a week): {days}/7 </div>
                <div className = "w-2/3 inline-block mr-2">
                <ProgressLine 
                    className="w-full"
                    percent={percent} 
                    strokeColor="#ffc107"
                    showInfo={false}>
                    </ProgressLine>
            </div>
            </div>
            
        </>
    );
}

export default WeeklyProgress;