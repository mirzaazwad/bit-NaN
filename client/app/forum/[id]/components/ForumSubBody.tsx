"use client";
import { useState } from "react";
import ForumCard from "../../components/ForumCard";
import { IQuestion } from "../../hooks/useQuestion";
import { useAIResponse } from "../hooks/useAIResponse";
import FloatingActionButton from "./FloatingActionButton";
import NewQuestionModal from "./ForumNewQuestion";

const ForumSubBody = () => {
    const {responses}=useAIResponse();
    const [showNewQuestionModal, setShowNewQuestionModal] = useState(false);
    return (
        <div className="w-full flex flex-col justify-content-center items-center">
            {
                responses.map((question: IQuestion, index: number) => (
                    <ForumCard key={index} question={question} >
                        {question.answer}
                    </ForumCard>
                ))
            }
            <FloatingActionButton onClick={()=>setShowNewQuestionModal(true)}/>
            <NewQuestionModal show={showNewQuestionModal} setShow={setShowNewQuestionModal}/>
        </div>
    );
}

export default ForumSubBody;