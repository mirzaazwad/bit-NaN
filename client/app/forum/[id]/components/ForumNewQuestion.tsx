import { authenticationInputBox, authenticationInputBoxLabel } from "@/app/config/theme/authentication.theme";
import { forumButton } from "@/app/config/theme/forum.theme";
import { Dispatch, SetStateAction } from "react";
import { BiCross, BiSend } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { Modal } from "rsuite";

interface INewQuestionModalProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}

const NewQuestionModal = ({ show, setShow }: INewQuestionModalProps) => {
    return (
        <Modal open={show} onClose={() => setShow(false)} backdrop={true} keyboard={true} autoFocus={true}>
            <Modal.Header className="px-4 py-2 rounded-lg bg-bitBrown" closeButton={false}>
                <div className="text-yellow-600">New Question</div>
            </Modal.Header>
            <Modal.Body className="bg-white">
                <div className="mb-6">
                    <label className={authenticationInputBoxLabel()}>
                        Ask Your Question
                    </label>
                    <input
                        type="text"
                        placeholder="What is your question?"
                        className={authenticationInputBox()}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer className="bg-bitBrown px-4 py-2 flex flex-row justify-end rounded-lg">
                <button className={forumButton} onClick={()=>setShow(false)}><CgClose className="me-2"/>Cancel</button>
                <button className={forumButton}><BiSend className="me-2"/>Ask</button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewQuestionModal;