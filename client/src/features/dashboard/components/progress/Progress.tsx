import ProgressLine from "rsuite/esm/Progress/ProgressLine";
import { TimerControlUtils } from "../../../../utils/helpers/timerHelper";

type Props = {
    hours: number;
    goal: number;
}
const Progress = (props: Props) => {
    const percent = (props.hours / props.goal) * 100;

    return (
        <>
            <div className="font-semibold text-lg w-full text-black mr-2 flex justify-center items-center">Timer Information</div>
            <div className="flex lg:flex-row flex-col px-2 py-1 w-full">
                <div className="font-semibold text-lg text-black lg:w-1/3 w-full">Today's Progress: {TimerControlUtils.formatHour(props.hours)} (Target: {props.goal}hr)</div>
                <div className="w-2/3 inline-block mr-2">
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

export default Progress;