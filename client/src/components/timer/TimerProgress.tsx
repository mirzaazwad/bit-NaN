import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useAppSelector } from "../../stores/redux-store";

interface TimerProgressProps {
  pomodoroValue: number;
  restValue: number;
}

const TimerProgress = (props: TimerProgressProps) => {
  const time = useAppSelector((state) => state.timer.time);
  const focus = useAppSelector((state) => state.timer.isRunning);

  const percentage = (time / (focus ? props.pomodoroValue * 60 : props. restValue * 60)) * 100;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

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
      text={`${minutes <= 9 ? "0" + minutes : minutes}:${
        seconds <= 9 ? "0" + seconds : seconds
      }`}
    />
  );
};

export default TimerProgress;
