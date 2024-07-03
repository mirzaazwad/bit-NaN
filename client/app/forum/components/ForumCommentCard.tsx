import { forumButton } from "@/app/config/theme/forum.theme";
import { IComments } from "@/app/utils/templates/comments";
import { Card } from "react-bootstrap";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

export interface IForumCommentCard {
    comment: IComments;
}


const ForumCommentCard = ({ comment }: IForumCommentCard) => {
    return (
        <Card className="w-full m-4 bg-bitBrown rounded-lg px-4 py-2 bg-white">
            <Card.Header>
                <Card.Title className="mb-2 text-yellow-600 font-bold">{comment.author}</Card.Title>
                <Card.Subtitle className="mb-2 text-gray-600">{comment.date}</Card.Subtitle>
            </Card.Header>

            <Card.Body className="flex flex-col justify-start bg-white rounded-lg">
                <Card.Text>{comment.text}</Card.Text>
                <div className="w-full flex flex-row justify-start">
                    <button className={forumButton}><BiSolidUpArrow />{comment.upvotes}</button>
                    <button className={forumButton}><BiSolidDownArrow />{comment.downvotes}</button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ForumCommentCard;