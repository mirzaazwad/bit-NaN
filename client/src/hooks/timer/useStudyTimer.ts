import { useTimer } from "./useTimer";
import { useSession } from "./useSession";
import { usePomodoroSettings } from "./usePomodoroSettings";
import { useErrorHandling } from "./useErrorHandling";
import { useEffect, useState } from "react";

export const useStudyTimer = () => {
  const { pomodoroValue, restValue, handlePomodoroTime, handleRestTime } = usePomodoroSettings(1, 1);
  const { error, validateInputs } = useErrorHandling();
  const { time, startTimer, stopTimer, resetTimer } = useTimer(pomodoroValue * 60);
  const { sessions, focus, switchMode, setSessions } = useSession(1, true);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (time === 0) {
      handleTimerStop();
    }
  }, [time]);

  const handleTimerStop = () => {
    if (sessions === 0) {
      resetTimer(pomodoroValue * 60);
      setDisabled(false);
    } else {
      const newTime = switchMode(pomodoroValue * 60, restValue * 60);
      resetTimer(newTime);
      startTimer();
    }
  };

  const handleStart = () => {
    if (!validateInputs(sessions, pomodoroValue, restValue)) {
      return;
    }
    setDisabled(true);
    resetTimer(pomodoroValue * 60);
    startTimer();
  };

  return {
    settings: {
      pomodoroValue,
      restValue,
      handlePomodoroTime,
      handleRestTime,
    },
    session: {
      focus,
      sessions,
      setSessions,
    },
    timer: {
      minutes: Math.floor(time / 60),
      seconds: time % 60,
      percentage: (time / (focus ? pomodoroValue * 60 : restValue * 60)) * 100,
      disabled,
      handleStart,
    },
    error,
  };
};
