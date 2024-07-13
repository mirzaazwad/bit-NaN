"use client";

import DragDropFile from "@/app/components/general/DragDropFile";
import {
    authenticationInputBoxLabel,
} from "@/app/config/theme/authentication.theme";
import { forumButton } from "@/app/config/theme/forum.theme";
import {
    Dispatch,
    SetStateAction,
    useState,
} from "react";
import {BiSend } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import dynamic from "next/dynamic";
import { Message, Modal, Uploader } from "rsuite";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface INewQuestionModalProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}

const NewQuestionModal = ({ show, setShow }: INewQuestionModalProps) => {
    const [file, setFile] = useState<any>(null);
    const [question, setQuestion] = useState("");

    const handleChange = (file: any) => {
        setFile(file);
    };

      const modules = {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ align: ["right", "center", "justify"] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [ "code"]
        ]
      };
    
      const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "color",
        "code",
        "align"
      ];

    return (
        <Modal
            open={show}
            onClose={() => setShow(false)}
            backdrop={true}
            keyboard={true}
            autoFocus={true}
        >
            <Modal.Header
                className="px-4 py-2 rounded-lg bg-bitBrown"
                closeButton={false}
            >
                <div className="text-yellow-600">New Question</div>
            </Modal.Header>
            <Modal.Body className="bg-white">
                <div className="mb-12">
                    <label className={authenticationInputBoxLabel()}>
                        Ask Your Question
                    </label>
                    <ReactQuill
                        theme="snow"
                        className="h-32 mb-6 block"
                        modules={modules}
                        formats={formats}
                        value={question}
                        onChange={(e)=>setQuestion(e)}
                    />
                </div>
                <div className="w-full flex flex-col justify-content-center items-center mb-6">
                    <DragDropFile />
                </div>
                {file && (
                    <Message type="success" showIcon className="w-full mb-6">
                        {`File name: ${file[0].name}`}
                    </Message>
                )}
                {!file && (
                    <Message type="warning" showIcon className="w-full mb-6">
                        No Files Uploaded Yet
                    </Message>
                )}
            </Modal.Body>
            <Modal.Footer className="bg-bitBrown px-4 py-2 flex flex-row justify-end rounded-lg">
                <button className={forumButton} onClick={() => setShow(false)}>
                    <CgClose className="me-2" />
                    Cancel
                </button>
                <button className={forumButton}>
                    <BiSend className="me-2" />
                    Send
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default NewQuestionModal;
