import { authenticationInputBox, authenticationInputBoxLabel } from "../../../../config/theme/authentication.theme";
import { forumButton } from "../../../../config/theme/forum.theme";
import { Dispatch, SetStateAction } from "react";
import { Modal } from "rsuite";
interface IForumModalProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}

const ForumModal = ({ show, setShow }: IForumModalProps) => {
    return (
        <Modal open={show} onClose={() => setShow(false)} backdrop={true} keyboard={true} autoFocus={true}>
            <Modal.Header className="px-4 py-2 rounded-lg bg-bitBrown" closeButton={false}>
                <div className="text-yellow-600">New Discussion</div>
            </Modal.Header>
            <Modal.Body className="bg-white">
                <div className="mb-6">
                    <label className={authenticationInputBoxLabel()}>
                        Title
                    </label>
                    <input
                        type="text"
                        placeholder="Title of the Discussion"
                        className={authenticationInputBox()}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer className="bg-bitBrown px-4 py-2 flex flex-row justify-end rounded-lg">
                <button className={forumButton} onClick={()=>setShow(false)}>Cancel</button>
                <button className={forumButton}>Confirm</button>
            </Modal.Footer>
        </Modal>
    );
}

export default ForumModal;