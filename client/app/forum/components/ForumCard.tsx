import { forumButton } from "@/app/config/theme/forum.theme";
import { IComments } from "@/app/utils/templates/comments";
import { IonIcon } from "@ionic/react";
import { chatbubbleEllipsesSharp } from "ionicons/icons";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import ForumCommentCard from "./ForumCommentCard";
import { IQuestion } from "../hooks/useQuestion";



interface IForumCardProps{
    question:IQuestion;
}

const ForumCard = ({question}:IForumCardProps) => {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    }

    return ( 
        <Card className="w-11/12 m-4 bg-bitBrown rounded-lg px-4 py-2" onMouseLeave={()=>setShowComments(false)}>
                        <Card.Header>
                            <Card.Title className="text-yellow-600 text-4xl">{question.question}</Card.Title>
                            <Card.Subtitle className="mb-2 text-white">Asked by <span className="font-bold">{question.author}</span> on {question.date}</Card.Subtitle>
                        </Card.Header>
                        <Card.Body className="flex flex-row justify-start bg-white rounded-lg">
                            <button className={forumButton}><BiSolidUpArrow />{question.upvotes}</button>
                            <button className={forumButton}><BiSolidDownArrow />{question.downvotes}</button>
                            <button className={forumButton} onClick={()=>toggleComments()}><IonIcon icon={chatbubbleEllipsesSharp} />{question.comments.length}</button>
                        </Card.Body>
                        {showComments && (<Card.Footer className="px-4 py-2">
                            <div className="w-full text-yellow-600 m-4 px-4 py-2 text-2xl">
                                Comments
                            </div>
                            {
                                question.comments.map((comment, index) => (
                                    <ForumCommentCard comment={comment} key={index}/>
                                ))
                            }
                        </Card.Footer>)}
                    </Card>
     );
}
 
export default ForumCard;