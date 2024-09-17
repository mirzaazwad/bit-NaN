import NumberInput from "./NumberInput";
import { TimerControlUtils } from "../../utils/helpers/timerHelper";
interface TimerControlsProps {
  focusTime: number;
  restTime: number;
  handlePomodoroTime: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRestTime: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sessions: number;
  isRunning: boolean;
}

const TimerControls = (props: TimerControlsProps) => {

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
        value={props.focusTime}
        onChange={props.handlePomodoroTime}
        disabled={props.isRunning}
        className="w-11/12 h-2 bg-bitBrown text-yellow-400 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-bitBrown mb-12">{formatTime(props.focusTime)}</div>
      <br />
      <label className="text-bitBrown font-bold">Rest Time</label>
      <input
        id="default-range"
        type="range"
        min={1*60}
        max={15*60}
        value={props.restTime}
        onChange={props.handleRestTime}
        disabled={props.isRunning}
        className="w-11/12 h-2 bg-bitBrown text-yellow-400 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-bitBrown mb-12">{formatTime(props.restTime)}</div>
      <div className="text-bitBrown font-bold">Number Of Sessions</div>
      <NumberInput
        value={props.sessions}
        min={1}
        max={15}
        disabled={props.isRunning}
      />
      {/* {error && <div className="text-red-500">{error}</div>} */}
    </div>
  );
};

export default TimerControls;