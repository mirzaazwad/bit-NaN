import { Modal } from "rsuite";
import { ModalControlUtils } from "../../utils/helpers/modalHelper";
import ModalHeader from "./ModalHeader";
import TimerProgress from "./TimerProgress";
import { useState } from "react";

const StudyTimer = () => {

    const [pomodoroTime, setPomodoroTime] = useState<number>(60);
    const [restTime, setRestTime] = useState<number>(60);

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
                    className="bg-slate-800"
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

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default StudyTimer;