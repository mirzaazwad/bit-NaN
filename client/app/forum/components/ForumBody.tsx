import { IQuestion, useQuestion } from "../hooks/useQuestion";
import ForumCard from "./ForumCard";

const ForumBody = () => {
    const {questions}=useQuestion();
    return (
        <div className="w-full flex flex-col justify-content-center items-center">
            {
                questions.map((question:IQuestion, index:number) => (
                    <ForumCard key={index} question={question} />
                ))
            }
        </div>
    );
}

export default ForumBody;
