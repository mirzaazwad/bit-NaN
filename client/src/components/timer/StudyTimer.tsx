import { IconButton, Modal } from "rsuite";
import { ModalControlUtils } from "../../utils/helpers/modalHelper";
import ModalHeader from "./ModalHeader";
import TimerProgress from "./TimerProgress";
import { useState } from "react";
import { appStore, useAppSelector } from "../../stores/redux-store";
import TimerControls from "./TimerControls";
import { timerActions } from "../../stores/slices/timer-slice";
import TimeIcon from '@rsuite/icons/Time';
const StudyTimer = () => {

    const [pomodoroTime, setPomodoroTime] = useState<number>(60);
    const [restTime, setRestTime] = useState<number>(60);
    const sessions = useAppSelector((state) => state.timer.sessions);

    const disabled = useAppSelector((state) => state.timer.disabled);

    const handlePomodoroTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPomodoroTime(parseInt(event.target.value));
        appStore.dispatch(timerActions.setTime(parseInt(event.target.value)));
    }

    return (
        <>
            <Modal
                onClose={() => ModalControlUtils.removeModal()}
                backdrop
                open
                keyboard
                className="bg-white rounded-lg"
            >
                <Modal.Header
                    className="bg-slate-700 rounded-t-lg"
                >
                    <ModalHeader />
                </Modal.Header>
                <Modal.Body>
                    <div className="w-full flex flex-row bg-white">
                        <div className="w-3/5 p-4">
                            <TimerProgress
                                pomodoroValue={pomodoroTime}
                                restValue={restTime}
                            />
                        </div>
                        <div className="w-2/5 p-4">
                            <TimerControls
                                pomodoroValue={pomodoroTime}
                                restValue={restTime}
                                handlePomodoroTime={handlePomodoroTime}
                                handleRestTime={(event) => setRestTime(parseInt(event.target.value))}
                                sessions={sessions}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {!disabled && (
                        <div className="p-1 pr-3">
                            <IconButton
                                onClick={() => console.log("Start")}
                                className="bg-bitBrown text-white px-4 py-2 rounded-lg disabled:bg-gray-950 mb-4"
                                icon={<TimeIcon color="black" />}
                            >
                                Start
                            </IconButton>
                        </div>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default StudyTimer;