import { ChangeEventHandler } from "react";

export interface ISettingsProps {
  pomodoroValue: number;
  restValue: number;
  handlePomodoroTime: ChangeEventHandler<HTMLInputElement>;
  handleRestTime: ChangeEventHandler<HTMLInputElement>;
}

export interface ITimerProps {
  minutes: number;
  seconds: number;
  percentage: number;
  disabled: boolean;
  handleStart: () => void;
  error: string;
}

export interface ISessionProps {
  focus: boolean;
  sessions: number;
  setSessions: React.Dispatch<React.SetStateAction<number>>;
}