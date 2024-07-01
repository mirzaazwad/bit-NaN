export interface ISettingsProps {
    pomodoroValue: number;
    restValue: number;
    handlePomodoroTime: (value: number) => void;
    handleRestTime: (value: number) => void;
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