import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TimerControlUtils } from "../../utils/helpers/timerHelper";

interface TimerProgressProps {
  focusState: boolean;
  focusTime: number;
  restTime: number;
  restState: boolean;
}

const TimerProgress = (props: TimerProgressProps) => {

  const percentage = (props.restState ? props.restTime : props.focusTime) / (120*60) * 100;

  return (
    <CircularProgressbar
      styles={buildStyles({
        rotation: 0.25,
        textSize: "16px",
        pathTransitionDuration: 0.5,
        pathColor: `rgba(38, 31, 36, 1)`,
        textColor: "#261f24",
        trailColor: "#facc15",
      })}
      value={percentage}
      text={`${TimerControlUtils.formatTime(props.restState ? props.restTime : props.focusTime)}`}
    />
  );
};

export default TimerProgress;
