import {
    authenticationInputBox
} from "../../../config/theme/authentication.theme";
import { forumButton } from "../../../config/theme/forum.theme";
import {
    Dispatch,
    SetStateAction,
    useState,
} from "react";
import { BiSend } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { Modal } from "rsuite";


interface INewQuestionModalProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
    setPrompt: Dispatch<SetStateAction<string>>;
    setError: Dispatch<SetStateAction<string|undefined>>;
    handleSubmit: ()=>Promise<void>
}

const NewQuestionModal = ({ show, setShow,handleSubmit,setPrompt,setError }: INewQuestionModalProps) => {
    const [question,setQuestion]=useState("");
    const askQuestion = async()=>{
        try{
            setPrompt(question);
            setShow(false);
            setError(undefined);
            await handleSubmit();
        }
        catch(error:any){
            setError(error.message)
        }
    }

    return (
        <Modal
            open={show}
            onClose={() => setShow(false)}
            backdrop={true}
            keyboard={true}
            autoFocus={true}
            style={{
                position: "fixed",
                top: "0%",
                left: "0%",
                transform: "translate(35%, 25%)"
            }}
        >
            <Modal.Header
                className="px-4 py-4 m-0 rounded-t-lg bg-bitBrown text-xl"
                closeButton={false}
            >
                <div className="text-yellow-600">Ask a New Question</div>
            </Modal.Header>
            <Modal.Body className="bg-white px-4 py-2 m-0">
                <div className="m-4">
                    <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className={authenticationInputBox()} placeholder="Ask Your Question..."></textarea>
                </div>
            </Modal.Body>
            <Modal.Footer className="bg-bitBrown px-4 py-2 flex flex-row justify-end rounded-b-lg">
                <button className={forumButton} onClick={() => setShow(false)} disabled={!show}>
                    <CgClose className="me-2" />
                    Cancel
                </button>
                <button className={forumButton} onClick={()=>askQuestion()} disabled={!show}>
                    <BiSend className="me-2" />
                    Ask
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default NewQuestionModal;
