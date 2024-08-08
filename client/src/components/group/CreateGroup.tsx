import { Button, Modal } from "rsuite";
import { ModalControlUtils } from "../../utils/helpers/modalHelper";
import { InputComponent } from "../goal/CommonComponents";
import AddMembers from "../general/AddMembers";
import { GroupRequest, Tag } from "../../utils/templates/Groups";
import { useState } from "react";
import ImageComponent from "../general/ImageComponent";
import GroupsHelper from "../../utils/helpers/groupsHelper";

const CreateGroup = () => {

    const [members, setMembers] = useState<Tag[]>([]);
    const [image, setImage] = useState(undefined);
    const [name, setName] = useState<string>("");

    const handleSubmit = async () => {
        const data: GroupRequest = {
            name:name,
            image: image,
            members: members
        }

        await GroupsHelper.createGroup(data);
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
                            Create Group
                        </Modal.Title>
                    </Modal.Header>
                </div>
                <Modal.Body>
                    <div className="p-2 space-y-6 px-4">
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800">Name</h5>
                            <InputComponent
                                placeholder="Name"
                                value={name}
                                onChange={value => setName(value)}
                            />
                        </div>
                        <hr className="border-gray-300" />
                        <div className="flex items-center justify-center">
                            <h5 className="text-lg font-semibold text-gray-800">
                                Picture
                            </h5>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <ImageComponent
                                size="xxl"
                                type="group"
                                image = {image}
                                setImage={setImage}
                            />
                        </div>
                        <hr className="border-gray-300" />
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

export default CreateGroup;