import { useAppSelector } from "../../stores/redux-store";
import NumberInput from "./NumberInput";

interface TimerControlsProps {
  pomodoroValue: number;
  restValue: number;
  handlePomodoroTime: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRestTime: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleStart: () => void;
  sessions: number;
}

const TimerControls = (props: TimerControlsProps) => {

  const disabled = useAppSelector((state) => state.timer.disabled);

  return (
    <div className="mt-6">
      <label className="text-bitBrown font-bold">Focus Time</label>
      <input
        id="default-range"
        type="range"
        min={1}
        max={120}
        value={props.pomodoroValue}
        onChange={props.handlePomodoroTime}
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
        value={props.restValue}
        onChange={props.handleRestTime}
        disabled={disabled}
        className="w-11/12 h-2 bg-bitBrown text-yellow-400 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-bitBrown mb-12">{`${props.restValue}:00`}</div>
      <div className="text-bitBrown font-bold">Number Of Sessions</div>
      <NumberInput
        value={props.sessions}
        min={1}
        max={15}
        disabled={disabled}
      />
      {!disabled && (
        <button
          onClick={props.handleStart}
          className="bg-bitBrown text-white px-4 py-2 rounded-lg disabled:bg-gray-950 mb-4"
        >
          Start
        </button>
      )}
      {/* {error && <div className="text-red-500">{error}</div>} */}
    </div>
  );
};

export default TimerControls;