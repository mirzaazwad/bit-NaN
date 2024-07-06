import { useState } from "react";

export const useVotes=(upvotesCount:number,downvotesCount:number,id:string,comment:boolean,forum:boolean,subForum:boolean)=>{
    const [isUpvoted, setIsUpvoted] = useState(false);
    const [isDownvoted, setIsDownvoted] = useState(false);
    const [upvotes, setUpvotes] = useState(upvotesCount);
    const [downvotes, setDownvotes] = useState(downvotesCount);

    const upvote = () => {
        if(isUpvoted){
            setUpvotes(upvotes-1);
        }
        else if(isDownvoted){
            setUpvotes(upvotes+1);
            setDownvotes(downvotes-1);
            setIsDownvoted(false);
        }
        else{
            setUpvotes(upvotes+1);
        }
        setIsUpvoted(!isUpvoted);
    }

    const downvote = () => {
        if(isDownvoted){
            setDownvotes(downvotes-1);
        }
        else if(isUpvoted){
            setDownvotes(downvotes+1);
            setUpvotes(upvotes-1);
            setIsUpvoted(false);
        }
        else{
            setDownvotes(downvotes+1);
        }
        setIsDownvoted(!isDownvoted);
    }

    return {upvotes,downvotes,upvote,downvote,isUpvoted,isDownvoted};
}