import { useState } from "react";

export const useErrorHandling = () => {
  const [error, setError] = useState("");

  const validateInputs = (sessions: number, pomodoroValue: number, restValue: number) => {
    if (sessions <= 0 || sessions > 10) {
      setError("Number of sessions must be between 1 and 10 inclusive");
      return false;
    }
    if (pomodoroValue <= 0) {
      setError("Focus time must be greater than 0");
      return false;
    }
    if (restValue <= 0) {
      setError("Rest time must be greater than 0");
      return false;
    }
    setError("");
    return true;
  };

  return { error, validateInputs };
};
