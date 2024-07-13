import { forumButton } from "../../../config/theme/forum.theme";
import { IComments } from "../../../utils/templates/comments";
import { Card } from "react-bootstrap";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { useVotes } from "../hooks/useVotes";

export interface IForumCommentCard {
    comment: IComments;
    isSubForum:boolean
}


const ForumCommentCard = ({ comment,isSubForum }: IForumCommentCard) => {
    const {upvotes,downvotes,upvote,downvote,isUpvoted,isDownvoted}=useVotes(comment.upvotes,comment.downvotes,comment.id,true,true,isSubForum);
    return (
        <Card className="w-full m-4 bg-bitBrown rounded-lg px-4 py-2 bg-white">
            <Card.Header>
                <Card.Title className="mb-2 text-yellow-600 font-bold">{comment.author}</Card.Title>
                <Card.Subtitle className="mb-2 text-gray-600">{comment.date}</Card.Subtitle>
            </Card.Header>

            <Card.Body className="flex flex-col justify-start bg-white rounded-lg">
                <Card.Text>{comment.text}</Card.Text>
                <div className="w-full flex flex-row justify-start">
                    <button className={forumButton} onClick={()=>upvote()}><BiSolidUpArrow />{upvotes}</button>
                    <button className={forumButton} onClick={()=>downvote()}><BiSolidDownArrow />{downvotes}</button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ForumCommentCard;