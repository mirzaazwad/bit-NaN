import { useState, useEffect } from "react";

export const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const [timer, setTimer] = useState<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (time === 0) {
      stopTimer();
    }
  }, [time]);

  const startTimer = () => {
    stopTimer();
    const interval = setInterval(() => tick(), 1000);
    setTimer(interval);
  };

  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(undefined);
    }
  };

  const tick = () => {
    setTime((prev) => prev - 1);
  };

  const resetTimer = (newTime: number) => {
    stopTimer();
    setTime(newTime);
  };

  return { time, startTimer, stopTimer, resetTimer };
};
