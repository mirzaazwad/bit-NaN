"use client";
import { forumButton } from "@/app/config/theme/forum.theme";
import { IonIcon } from "@ionic/react";
import { chatbubbleEllipsesSharp } from "ionicons/icons";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import ForumCommentCard from "./ForumCommentCard";
import { IQuestion } from "../hooks/useQuestion";



interface IForumCardProps{
    question:IQuestion;
    children?:React.ReactNode;
}

const ForumCard = ({question,children}:IForumCardProps) => {
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
                        <Card.Body className="w-full flex flex-col justify-start bg-white rounded-lg">
                            {children && (<div className="w-full m-6">
                            {children}
                            </div>)}
                            <div className="w-full flex flex-row justify-start">
                            <button className={forumButton}><BiSolidUpArrow />{question.upvotes}</button>
                            <button className={forumButton}><BiSolidDownArrow />{question.downvotes}</button>
                            <button className={forumButton} onClick={()=>toggleComments()}><IonIcon icon={chatbubbleEllipsesSharp} />{question.comments.length}</button>
                            </div>
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