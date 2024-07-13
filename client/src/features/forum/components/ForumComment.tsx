import { forumButton } from "../../../config/theme/forum.theme";
import { IComments } from "../../../utils/templates/comments";
import { useState } from "react";
import { BiSend } from "react-icons/bi";

interface IForumCommentProps {
    addComment:(id:string,comment:IComments)=>void;
    id:string;
    post_id:string;
}


const ForumComment = ({addComment,id,post_id}:IForumCommentProps) => {
    const [comment,setComment]=useState("");
    const [disabled,setDisabled]=useState(true);
    
    const handleComment=(comment:string)=>{
        setComment(comment);
    }

    const handleKeyPress=(e:any)=>{
        setDisabled(true);
        if(e.key==="Enter"){
            addComment(post_id,{
                id:id,
                text:comment,
                author:"Anonymous",
                date:new Date().toISOString(),
                upvotes:0,
                downvotes:0
            });
        }
        setDisabled(false);
    }

    const handleSubmit=()=>{
        setDisabled(true);
        addComment(post_id,{
            id:id,
            text:comment,
            author:"Anonymous",
            date:new Date().toISOString(),
            upvotes:0,
            downvotes:0
        });
        setComment("");
        setDisabled(false);
    }



    return (
        <div className="w-full flex flex-row items-center justify-content-center">
            <textarea value={comment} onChange={(e)=>handleComment(e.target.value)} className="w-11/12 h-12 m-2 p-2 bg-white text-bitBrown rounded-lg" placeholder="Add a comment..."></textarea>
            <button className={forumButton} onClick={()=>handleSubmit()} onKeyDown={(e)=>handleKeyPress(e)}><BiSend className="me-2" />Comment</button>
        </div>
    );
}

export default ForumComment;