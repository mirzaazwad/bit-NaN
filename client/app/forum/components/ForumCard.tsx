"use client";
import { forumButton } from "@/app/config/theme/forum.theme";
import { IonIcon } from "@ionic/react";
import { chatbubbleEllipsesSharp } from "ionicons/icons";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import ForumCommentCard from "./ForumCommentCard";
import { IQuestion } from "../hooks/useQuestion";
import { useVotes } from "../hooks/useVotes";
import ForumComment from "./ForumComment";
import { IComments } from "@/app/utils/templates/comments";
import { GoReport } from "react-icons/go";
import { Tooltip, Whisper } from "rsuite";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ForumLink from "./ForumLink";




interface IForumCardProps {
    question: IQuestion;
    children?: React.ReactNode;
    addComment: (id: string, comment: IComments) => void;
    isSubForum: boolean;
}

const ForumCard = ({ question, children, addComment, isSubForum }: IForumCardProps) => {
    const [showComments, setShowComments] = useState(false);
    const { upvote, downvote, upvotes, downvotes } = useVotes(question.upvotes, question.downvotes, question.id, false, true, isSubForum);
    const router = useRouter();

    const toggleComments = () => {
        setShowComments(!showComments);
    }

    return (
        <Card className="w-11/12 m-4 bg-bitBrown rounded-lg px-4 py-2" onMouseLeave={() => setShowComments(false)}>
            <ForumLink isSubForum={isSubForum} question={question}>
                <Card.Header>
                    <Card.Title className="text-yellow-600 text-4xl">{question.question}</Card.Title>
                    <Card.Subtitle className="mb-2 text-white">Asked by <span className="font-bold">{question.author}</span> on {question.date}</Card.Subtitle>
                </Card.Header>
            </ForumLink>
            <Card.Body className="w-full flex flex-col justify-start bg-white rounded-lg">
                {children && (<div className="w-full m-6">
                    {children}
                </div>)}
                <div className="w-full flex flex-row justify-start">
                    <button className={forumButton} onClick={() => upvote()}><BiSolidUpArrow />{upvotes}</button>
                    <button className={forumButton} onClick={() => downvote()}><BiSolidDownArrow />{downvotes}</button>
                    <button className={forumButton} onClick={() => toggleComments()}><IonIcon icon={chatbubbleEllipsesSharp} />{question.comments.length}</button>
                    <Whisper trigger="hover" placement="topEnd" controlId={`control-id-button`} speaker={<Tooltip>Report this Response</Tooltip>}>
                        <button className={forumButton} onClick={() => { }}><GoReport /></button>
                    </Whisper>
                </div>
            </Card.Body>
            {showComments && (<Card.Footer className="px-4 py-2">
                <div className="w-full text-yellow-600 m-4 px-4 py-2 text-2xl">
                    Comments
                </div>
                {
                    question.comments.map((comment, index) => (
                        <ForumCommentCard comment={comment} key={index} isSubForum={isSubForum} />
                    ))
                }
                <ForumComment addComment={addComment} id={String(question.comments.length)} post_id={question.id} />
            </Card.Footer>)}
        </Card>
    );
}

export default ForumCard;