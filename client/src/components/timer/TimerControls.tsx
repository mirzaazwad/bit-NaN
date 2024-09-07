import { useAppSelector } from "../../stores/redux-store";
import NumberInput from "./NumberInput";
import { TimerControlUtils } from "../../utils/helpers/timerHelper";
interface TimerControlsProps {
  pomodoroValue: number;
  restValue: number;
  handlePomodoroTime: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRestTime: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sessions: number;
}

const TimerControls = (props: TimerControlsProps) => {

  const disabled = useAppSelector((state) => state.timer.disabled);

  const formatTime = (timeInSeconds: number): string => {
    return TimerControlUtils.formatTime(timeInSeconds);
  }

  return (
    <div className="mt-6">
      <label className="text-bitBrown font-bold">Focus Time</label>
      <input
        id="default-range"
        type="range"
        min={1*60}
        max={120*60}
        value={props.pomodoroValue}
        onChange={props.handlePomodoroTime}
        disabled={disabled}
        className="w-11/12 h-2 bg-bitBrown text-yellow-400 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-bitBrown mb-12">{formatTime(props.pomodoroValue)}</div>
      <br />
      <label className="text-bitBrown font-bold">Rest Time</label>
      <input
        id="default-range"
        type="range"
        min={1*60}
        max={15*60}
        value={props.restValue}
        onChange={props.handleRestTime}
        disabled={disabled}
        className="w-11/12 h-2 bg-bitBrown text-yellow-400 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-bitBrown mb-12">{formatTime(props.restValue)}</div>
      <div className="text-bitBrown font-bold">Number Of Sessions</div>
      <NumberInput
        value={props.sessions}
        min={1*60}
        max={15*60}
        disabled={disabled}
      />
      {/* {error && <div className="text-red-500">{error}</div>} */}
    </div>
  );
};

export default TimerControls;