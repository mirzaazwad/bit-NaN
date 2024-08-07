import { authenticationInputBox, authenticationInputBoxLabel } from "../../../config/theme/authentication.theme";
import { forumButton } from "../../../config/theme/forum.theme";
import { Dispatch, SetStateAction } from "react";
import { RadioTile, RadioTileGroup } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { VscLock, VscWorkspaceTrusted, VscRepo } from 'react-icons/vsc';
import { Modal } from "rsuite";

interface IForumSearchModalProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}

const ForumSearchModal = ({ show, setShow }: IForumSearchModalProps) => {
    return (
        <Modal open={show} onClose={() => setShow(false)} backdrop={true} keyboard={true} autoFocus={true}>
            <Modal.Header className="px-4 py-2 rounded-lg bg-bitBrown" closeButton={false}>
                <div className="text-yellow-600">New Discussion</div>
            </Modal.Header>
            <Modal.Body className="bg-white">
                <div className="mb-6">
                    <label className={authenticationInputBoxLabel()}>
                        Ask Your Question
                    </label>
                    <input
                        type="text"
                        placeholder="Sample Question"
                        className={authenticationInputBox()}
                    />
                </div>
                <RadioTileGroup defaultValue="private" aria-label="Visibility Level">
                    <RadioTile icon={<Icon as={VscLock} />} label="Private" value="private">
                        The discussion access is restricted to the user only and it cannot be shared or accessed by others
                    </RadioTile>
                    <RadioTile icon={<Icon as={VscRepo} />} label="Public" value="public">
                        The discussion is visible in the forum and any user can access and benefit from it, it can also be cloned to ask further questions in the discussion
                    </RadioTile>
                </RadioTileGroup>
            </Modal.Body>
            <Modal.Footer className="bg-bitBrown px-4 py-2 flex flex-row justify-end rounded-lg">
                <button className={forumButton} onClick={()=>setShow(false)}>Cancel</button>
                <button className={forumButton}>Confirm</button>
            </Modal.Footer>
        </Modal>
    );
}

export default ForumSearchModal;