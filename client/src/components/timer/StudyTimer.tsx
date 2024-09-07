import { Modal } from "rsuite";
import { ModalControlUtils } from "../../utils/helpers/modalHelper";

const StudyTimer = () => {

    return (
        <>
            <Modal
                onClose={() => ModalControlUtils.removeModal()}
                backdrop
                open
                keyboard
            ></Modal>
        </>
    );
}

export default StudyTimer;