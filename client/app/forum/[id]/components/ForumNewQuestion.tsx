import DragDropFile from "@/app/components/general/DragDropFile";
import { authenticationInputBox, authenticationInputBoxLabel } from "@/app/config/theme/authentication.theme";
import { forumButton } from "@/app/config/theme/forum.theme";
import { Dispatch, SetStateAction, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { BiCross, BiSend } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaFile } from "react-icons/fa";
import { Message, Modal, Uploader } from "rsuite";

interface INewQuestionModalProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}

const fileTypes = ["JPG", "PNG", "GIF"];

const NewQuestionModal = ({ show, setShow }: INewQuestionModalProps) => {
    const [file, setFile] = useState<any>(null);
    const handleChange = (file: any) => {
        setFile(file);
    };
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
                <div className="w-full flex flex-col justify-content-center items-center mb-6">
                    <DragDropFile />
                </div>
                {file && (<Message type="success" showIcon className="w-full mb-6">
                    {`File name: ${file[0].name}`}asd
                </Message>)}
                {!file && (<Message type="warning" showIcon className="w-full mb-6">
                    No Files Uploaded Yet
                </Message>)}
            </Modal.Body>
            <Modal.Footer className="bg-bitBrown px-4 py-2 flex flex-row justify-end rounded-lg">
                <button className={forumButton} onClick={() => setShow(false)}><CgClose className="me-2" />Cancel</button>
                <button className={forumButton}><BiSend className="me-2" />Send</button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewQuestionModal;