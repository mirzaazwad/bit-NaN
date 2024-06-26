import { useState } from "react";

export const usePomodoroSettings = (initialPomodoroValue: number, initialRestValue: number) => {
  const [pomodoroValue, setPomodoroValue] = useState(initialPomodoroValue);
  const [restValue, setRestValue] = useState(initialRestValue);

  const handlePomodoroTime = (value: number) => {
    setPomodoroValue(value);
  };

  const handleRestTime = (value: number) => {
    setRestValue(value);
  };

  return { pomodoroValue, restValue, handlePomodoroTime, handleRestTime };
};
