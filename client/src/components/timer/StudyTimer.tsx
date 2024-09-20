import { IconButton, Modal } from "rsuite";
import { ModalControlUtils } from "../../utils/helpers/modalHelper";
import ModalHeader from "./ModalHeader";
import TimerProgress from "./TimerProgress";
import React from "react";
import { appStore, useAppSelector } from "../../stores/redux-store";
import TimerControls from "./TimerControls";
import { timerActions } from "../../stores/slices/timer-slice";
import TimeIcon from '@rsuite/icons/Time';
import TimerService from "../../utils/service/TimerService";
const StudyTimer = () => {

    const timerService: TimerService = TimerService.getInstance();

    const focusTime = useAppSelector((state) => state.timer.focus);
    const restTime = useAppSelector((state) => state.timer.rest);
    const sessions = useAppSelector((state) => state.timer.sessions);
    const isRunning = useAppSelector((state) => state.timer.isRunning);

    const focusState = useAppSelector((state) => state.timer.focusState);
    const restState = useAppSelector((state) => state.timer.restState);

    const handleFocusTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        appStore.dispatch(timerActions.setFocus(parseInt(event.target.value)));
    }

    const handleRestTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        appStore.dispatch(timerActions.setRest(parseInt(event.target.value)));
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
                                focusState={focusState}
                                focusTime={focusTime}
                                restTime={restTime}
                                restState={restState}
                            />
                        </div>
                        <div className="w-2/5 p-4">
                            <TimerControls
                                focusTime={focusTime}
                                restTime={restTime}
                                handlePomodoroTime={handleFocusTime}
                                handleRestTime={handleRestTime}
                                sessions={sessions}
                                isRunning={isRunning}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {!isRunning && (
                        <div className="p-1 pr-3">
                            <IconButton
                                onClick={() => timerService.start()}
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