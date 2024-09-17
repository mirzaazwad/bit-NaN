import { useAppSelector } from "../../stores/redux-store";

const ModalHeader = () => {

  const restState = useAppSelector((state) => state.timer.restState);
  const disabled = useAppSelector((state) => state.timer.isRunning);
  return (
    <div className="flex items-center justify-between bg-inherit p-4 md:p-5">
      {disabled && (
        <div
          className={`px-4 py-2 ${restState
              ? "bg-red-400 text-red-950 border border-red-900"
              : "bg-green-400 text-green-950 border border-green-900"
            } rounded-lg`}
        >{`${restState ? "Rest " : "Focus "}`}</div>
      )}
      <h3 className="text-xl font-semibold text-white text-bitBrown w-full text-center">
        Pomodoro Timer
      </h3>
    </div>
  );
};

export default ModalHeader;