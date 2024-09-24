import { useEffect, useState } from "react";
import { HeaderBarTheme } from "../../../config/theme/reusable.theme";
import { Button, Loader, Uploader } from "rsuite";
import AddButton from "../../../components/general/AddButton";
import GroupsHelper from "../../../utils/helpers/groupsHelper";
import { useAppSelector } from "../../../stores/redux-store";
import { FileType } from "../../../utils/enums/FileEnums";
import renderFilePreviews from "../../../components/general/FilePreview";

const GroupFiles = () => {

    const id = useAppSelector(state => state.group.selectedGroup?.id);

    const [loading, setLoading] = useState<boolean>(false);
    const [fileList, setFileList] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [files, setFiles] = useState<any[]>([]);

    const handleFileChange = (files: any[]) => {
        if (files.length > 0) {
            setFileList([files[0]]);
            setErrorMessage('');
        } else {
            setFileList([]);
        }
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
            setFileList([]);
            setErrorMessage('');
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
                const files = await GroupsHelper.getFiles(id);
                setFiles(files);
                console.log(files)
            }
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFiles();
    },[])

    return (
        <div className="w-full my-3 mx-1 max-h-screen">
            <div className={`${HeaderBarTheme}`}>
                <h3 className="font-semibold text-xl text-white">Files</h3>
            </div>
            {!loading ? (
                <div className="w-full flex flex-col p-2">
                    <div className="w-full flex flex-col p-2">
                        {renderFilePreviews(files)}
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