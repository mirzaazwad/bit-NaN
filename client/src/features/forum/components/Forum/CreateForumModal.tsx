import { Button, Loader, Message, Modal, RadioTile, RadioTileGroup } from 'rsuite';
import { InputComponent } from '../../../../components/goal/CommonComponents';
import { IonIcon } from '@ionic/react';
import { chatbubbleEllipsesSharp, documentSharp } from 'ionicons/icons';
import FileInput from './FileInput';
import { ForumType } from '../../../../utils/templates/Forum';
import { useCreateForum } from '../../hooks/useCreateForum';

interface ICreateForumModal {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
}


const CreateForumModal = ({ open, setOpen }: ICreateForumModal) => {

    const {
        addFile,
        handleSubmit,
        handleInputChange,
        removeModal,
        attachedFile,
        forumType,
        setForumType,
        fileError,
        forumData,
        disabled,
        forumError
    }=useCreateForum(setOpen);
    




    return (
        <>
            <Modal
                onClose={removeModal}
                backdrop
                open={open}
                keyboard
                className='rounded-lg bg-gray-100 z-10'
            >
                <div className={`w-full p-4 text-bitBrown bg-yellow-600 px-4 py-2 rounded-t-lg`}>
                    <Modal.Header>
                        <Modal.Title className="pt-2 text-xl font-bold">
                            Create New Forum
                        </Modal.Title>
                    </Modal.Header>
                </div>
                <Modal.Body>
                    {forumError && (
                        <Message type="error">
                            {forumError}
                        </Message>
                    )}
                    <div className="p-6 space-y-6 flex flex-col">
                        <h5 className="text-lg font-semibold text-gray-800">Title</h5>
                        <InputComponent placeholder='Forum Title' value={forumData.title} onChange={value=>handleInputChange('title',value)}/>
                        <h5 className="text-lg font-semibold text-gray-800">Description</h5>
                        <InputComponent placeholder='Describe the contents of the Forum' value={forumData.description} onChange={value=>handleInputChange('description',value)}/>
                        <h5 className="text-lg font-semibold text-gray-800">Type</h5>
                        <p className="text-sm text-gray-400">Select the type of forum you want</p>
                        <RadioTileGroup defaultValue="CHAT" aria-label="Visibility Level">
                            <RadioTile icon={<IonIcon icon={chatbubbleEllipsesSharp} />} label="Chat" value="CHAT" onClick={() => setForumType(ForumType.CHAT)}>
                                Chat with the AI model on different topics that suit your interest and academic demands
                            </RadioTile>
                            <RadioTile icon={<IonIcon icon={documentSharp} />} label="Document" value="DOCUMENT" onClick={() => setForumType(ForumType.DOCUMENT)}>
                                Chat with the AI based on a particular PDF document such that the AI model analyzes the given document and answers as per the document's contents
                            </RadioTile>
                        </RadioTileGroup>
                        {forumType === ForumType.DOCUMENT && (
                            <>
                                <h5 className="text-lg font-semibold text-gray-800">Insert A Document</h5>
                                <FileInput setFile={addFile} />
                                {attachedFile && (
                                    <Message type='warning'>
                                        <span className='font-semibold'>{attachedFile}</span>
                                    </Message>
                                )}
                                {fileError && (
                                    <Message type='error'>
                                        <span className='font-semibold'>{fileError}</span>
                                    </Message>
                                )}
                            </>
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer className='p-2'>
                    <div className='flex flex-row w-full justify-end'>
                        <Button
                            onClick={() => handleSubmit()}
                            appearance='primary'
                            className={`bg-yellow-600 text-bitBrown hover:text-yellow-600 hover:bg-bitBrown`}
                            disabled={disabled}
                        >
                            {disabled && (<Loader></Loader>)}
                            Save</Button>
                        <Button
                            onClick={removeModal}
                            appearance="primary"
                            className={`bg-yellow-600 text-bitBrown hover:text-white hover:bg-red-800`}
                        >
                            Close
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>

    );
};

export default CreateForumModal;
