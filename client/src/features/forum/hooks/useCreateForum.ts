/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useState } from "react";
import { ForumType } from "../../../utils/templates/Forum";
import { forumClientHelper } from "../../../utils/helpers/forumClientHelper";

export const useCreateForum=(setOpen:React.Dispatch<SetStateAction<boolean>>)=>{
    const [forumType, setForumType] = useState<ForumType>(ForumType.CHAT);
    const [file, setFile] = useState<File>();
    const [attachedFile, setAttachedFile] = useState("");
    const [fileError, setFileError] = useState("");
    const [forumError,setForumError] = useState("");
    const [disabled,setDisabled]=useState(false);
    const [forumData,setForumData]=useState({
        title:'',
        description:''
    })

    const handleInputChange = (field: string, value: any) => {
        setForumData(prevState => ({
            ...prevState,
            [field]: value
        }));
    }



    const removeModal = () => {
        setOpen(false)
    }


    const handleSubmit = async () => {
        setDisabled(true);
        setForumError("");
        if(forumData.title==="" || forumData.description===""){
            setForumError("All the fields must be entered");
            setDisabled(false);
            return;
        }
        if(forumType===ForumType.DOCUMENT && !file){
            setForumError("For Type Document, a document must be attached");
            setDisabled(false);
            return;
        }
        await forumClientHelper.addForumPost({
            ...forumData,
            forumType
        },file).then(()=>setOpen(false))
        .catch((err:any)=>{
            setForumError(`Internal Server Error: ${err.message}`)
        })
        setForumType(ForumType.CHAT);
        handleInputChange('title',"");
        handleInputChange('description',"");
        setDisabled(false);
    }

    const addFile = (e: any) => {
        setFileError("");
        setAttachedFile("");
        try {
            const file: File = e.target?.files[0];
            if (file) {
                if (file.size > 1000 * 1000) {
                    const size = file.size / (1000 * 1000);
                    if (size > 100) {
                        throw Error("File Size Greater Than 100 MB is not accepted");
                    }
                    setAttachedFile(`Attached File- ${file.name}: ${size.toFixed(2)} MB`)
                }
                else if (file.size > 1000) {
                    setAttachedFile(`Attached File- ${file.name}: ${(file.size / 1000).toFixed(2)} KB`)
                }
                else {
                    setAttachedFile(`Attached File- ${file.name}: ${file.size} B`)
                }
                setFile(file);
            }
            else {
                throw Error(`File could not be attached`);
            }
        }
        catch (fileError: any) {
            setFileError(fileError.message);
        }
    }


    return {
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
    }
}