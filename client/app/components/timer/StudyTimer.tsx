"use client";
import { SetStateAction } from "react";
import { useStudyTimer } from "../../hooks/timer/useStudyTimer";
import ModalHeader from "./ModalHeader";
import TimerProgress from "./TimerProgress";
import TimerControls from "./TimerControls";

interface IStudyTimer {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}

const StudyTimer = ({ show, setShow }: IStudyTimer) => {
  const {
    settings: { pomodoroValue, restValue, handlePomodoroTime, handleRestTime },
    session: { focus, sessions, setSessions },
    timer: { minutes, seconds, percentage, disabled, handleStart },
    error,
  } = useStudyTimer();

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      aria-hidden="true"
      className="z-50 fixed inset-0 flex justify-center items-center h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-yellow-400 rounded-lg shadow">
          <ModalHeader focus={focus} disabled={disabled} handleClose={handleClose} />
          <div className="w-full flex">
            <div className="p-4 md:p-5 space-y-4 w-3/5">
              <TimerProgress minutes={minutes} seconds={seconds} percentage={percentage} />
            </div>
            <TimerControls
              pomodoroValue={pomodoroValue}
              restValue={restValue}
              sessions={sessions}
              disabled={disabled}
              error={error}
              handlePomodoroTime={handlePomodoroTime}
              handleRestTime={handleRestTime}
              setSessions={setSessions}
              handleStart={handleStart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyTimer;
