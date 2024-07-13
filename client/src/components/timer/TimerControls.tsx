"use client";
import { ISettingsProps, ITimerProps, ISessionProps } from "@/app/utils/templates/timer";
import NumberInput from "./NumberInput";

interface TimerControlsProps {
  settings: ISettingsProps;
  timer: ITimerProps;
  session: ISessionProps;
}

const TimerControls = ({ settings, timer, session }: TimerControlsProps) => {
  const {
    pomodoroValue,
    restValue,
    handlePomodoroTime,
    handleRestTime,
  } = settings;

  const {
    minutes,
    seconds,
    percentage,
    disabled,
    handleStart,
    error,
  } = timer;

  const { sessions, setSessions } = session;

  return (
    <div className="mt-6">
      <label className="text-bitBrown font-bold">Focus Time</label>
      <input
        id="default-range"
        type="range"
        min={1}
        max={120}
        value={pomodoroValue}
        onChange={(e) => handlePomodoroTime(parseInt(e.target.value))}
        disabled={disabled}
        className="w-11/12 h-2 mb-12 bg-bitBrown text-yellow-400 rounded-lg appearance-none cursor-pointer"
      />
      <br />
      <label className="text-bitBrown font-bold">Rest Time</label>
      <input
        id="default-range"
        type="range"
        min={1}
        max={15}
        value={restValue}
        onChange={(e) => handleRestTime(parseInt(e.target.value))}
        disabled={disabled}
        className="w-11/12 h-2 bg-bitBrown text-yellow-400 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-bitBrown mb-12">{`${restValue}:00`}</div>
      <div className="text-bitBrown font-bold">Number Of Sessions</div>
      <NumberInput
        value={sessions}
        updateValue={setSessions}
        min={1}
        max={15}
        disabled={disabled}
      />
      {!disabled && (
        <button
          onClick={handleStart}
          className="bg-bitBrown text-white px-4 py-2 rounded-lg disabled:bg-gray-950 mb-4"
        >
          Start
        </button>
      )}
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default TimerControls;
