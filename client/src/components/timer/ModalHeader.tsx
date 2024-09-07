import { useAppSelector } from "../../stores/redux-store";

const ModalHeader = () => {

  const focus = useAppSelector((state) => state.timer.isRunning);  
  const disabled = useAppSelector((state) => state.timer.disabled);
  return (
    <div className="flex items-center justify-between p-4 md:p-5">
      {disabled && (
        <div
          className={`px-4 py-2 bg-${focus ? "green" : "red"}-400 text-${
            focus ? "green" : "red"
          }-950 border border-${focus ? "green" : "red"}-900 rounded-lg`}
        >{`${focus ? "Focus " : "Rest "}`}</div>
      )}
      <h3 className="text-xl font-semibold text-white text-bitBrown w-full text-center">
        Pomodoro Timer
      </h3>
    </div>
  );
};

export default ModalHeader;