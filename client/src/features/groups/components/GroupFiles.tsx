/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { HeaderBarTheme } from "../../../config/theme/reusable.theme";
import { Button, Loader, Message, Uploader } from "rsuite";
import AddButton from "../../../components/general/AddButton";
import GroupsHelper from "../../../utils/helpers/groupsHelper";
import { useAppSelector } from "../../../stores/redux-store";
import { FileType } from "../../../utils/enums/FileEnums";
import renderFilePreviews from "../../../components/general/FilePreview";
import { WebSocketService } from "../../../utils/service/WebSocketService";
import { IMessage } from "../../../utils/templates/Message";
import ProfileHelper from "../../../utils/helpers/profileHelper";
import { MessageType } from "../../../utils/enums/MessageEnums";

const GroupFiles = () => {

    const id = useAppSelector(state => state.group.selectedGroup?.id);
    const webSocketService = WebSocketService.getInstance();
    const [loading, setLoading] = useState<boolean>(false);
    const [fileList, setFileList] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [files, setFiles] = useState<any[]>([]);
    const [username,setUsername] = useState("");
    const handleFileChange = (files: any[]) => {
        if (files.length > 0) {
            setFileList([files[0]]);
            setErrorMessage('');
        } else {
            setFileList([]);
        }
    };

    const fetchProfileInformation = async () => {
        const user = await ProfileHelper.getProfile();
        setUsername(user.userName);
      };

      const handleMessageReceived = (receivedMessage: IMessage) => {
        GroupsHelper.setMessage(receivedMessage);
      };

    const handleUpload = async () => {
        try {
            setLoading(true);
            if (id) {
                const formData = new FormData();
                formData.append("file", fileList[0].blobFile);
                formData.append("category", FileType.GROUPFILE);
                await GroupsHelper.addFileToGroup(formData, id);
            }
            const numberOfFiles = fileList.length;
            const fileNames = fileList.map((file)=>file.name);
            webSocketService.sendMessage(id!,{
                message: `${username} uploaded ${numberOfFiles} ${numberOfFiles>1?"files":"file"}: ${fileNames.join(', ')}`,
                sender:username,
                type:MessageType.CHAT
            })
            setFileList([]);
            setErrorMessage('');
            await fetchFiles();
        } catch (error) {
            setErrorMessage('Error uploading file');
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const fetchFiles = async () => {
        try{
            setLoading(true);
            if(id){
                await fetchProfileInformation();
                const files = await GroupsHelper.getFiles(id);
                setFiles(files);
                console.log(files)
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchFiles().then(()=>{
            WebSocketService.sender = username;
            WebSocketService.groupId = id!;
            WebSocketService.onMessageReceived = handleMessageReceived;
            webSocketService
            .connect()
            .then(() => {
                setLoading(false);
            })
            .catch((err) => console.error(err));
        })
        
    },[id])

    if(!id){
        return (
            <Message type="error">Could Not Fetch Files</Message>
        )
    }

    return (
        <div className="w-full my-3 mx-1 max-h-screen">
            <div className={`${HeaderBarTheme}`}>
                <h3 className="font-semibold text-xl text-white">Files</h3>
            </div>
            {!loading ? (
                <div className="w-full flex flex-col p-2">
                    <div className="w-full flex flex-col p-2">
                        {files && renderFilePreviews(files)}
                    </div>
                    <div className="w-full flex flex-col">
                        <Uploader
                            action=""
                            autoUpload={false}
                            listType="picture-text"
                            className="custom-uploader"
                            fileList={fileList}
                            onChange={handleFileChange}
                            multiple={false}
                        ><AddButton tip="Add file to this group" /></Uploader>
                        <Button
                            appearance="ghost"
                            className="my-1"
                            onClick={handleUpload}
                        >Send</Button>
                        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                    </div>
                </div>
            ) : (
                <div className="flex w-full items-center justify-center">
                    <Loader content="loading..." />
                </div>
            )}
        </div>
    );
}
export default GroupFiles;