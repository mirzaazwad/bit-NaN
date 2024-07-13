import { Link } from "react-router-dom";
import { IQuestion } from "../hooks/useQuestion";

interface ILinkProps {
    children: React.ReactNode;
    isSubForum:boolean;
    question:IQuestion;
}

const ForumLink = ({children,isSubForum,question}:ILinkProps) => {

    if(!isSubForum){
        return (
            <Link to={`/forum/${question.id}`} state={{
                question:question.question,
            }}>
            {children}
            </Link>
        );
    }

    return ( 
        <div className="w-full flex flex-col justify-start">
            {children}
        </div>
     );
}
 
export default ForumLink;