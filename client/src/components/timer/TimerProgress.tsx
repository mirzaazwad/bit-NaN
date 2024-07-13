"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface TimerProgressProps {
  minutes: number;
  seconds: number;
  percentage: number;
}

const TimerProgress = ({ minutes, seconds, percentage }: TimerProgressProps) => {
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
