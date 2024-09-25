import { Button, Modal } from "rsuite";
import { ModalControlUtils } from "../../utils/helpers/modalHelper";
import AddMembers from "../general/AddMembers";
import { Tag } from "../../utils/templates/Groups";
import { useState } from "react";
import { useAppSelector } from "../../stores/redux-store";

const AddUsers = () => {
    const id = useAppSelector(state => state.group.selectedGroup?.id);
    const [members, setMembers] = useState<Tag[]>([]);

    const handleSubmit = () => {
        
    }

    return (
        <>
            <Modal
                onClose={() => ModalControlUtils.removeModal()}
                backdrop
                open
                keyboard
                className="rounded-lg bg-gray-100 z-10"
            >
                <div className={`w-full p-4 rounded-t-lg bg-amber-600`}>
                    <Modal.Header>
                        <Modal.Title className="pt-2 text-xl font-bold text-white">
                            Add Users
                        </Modal.Title>
                    </Modal.Header>
                </div>
                <Modal.Body>
                    <div className="p-2 space-y-6 px-4">
                        <div>
                            <AddMembers 
                                members={members}
                                setMembers={setMembers}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='p-2'>
                        <div className='flex justify-end w-full'>
                            <Button
                                onClick={handleSubmit}
                                appearance='primary'
                                className={`bg-amber-600 hover:text-white hover:bg-gray-700`}
                            >Save</Button>
                            <Button
                                onClick={()=>ModalControlUtils.removeModal()}
                                appearance="primary"
                                className={`bg-amber-600 hover:text-white hover:bg-gray-700`}
                            >
                                Close
                            </Button>
                        </div>
                </Modal.Footer>
            </Modal>
        </>

    );
}
export default AddUsers;