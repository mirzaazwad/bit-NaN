import Link from "next/link";
import { IQuestion } from "../hooks/useQuestion";

interface ILinkProps {
    children: React.ReactNode;
    isSubForum:boolean;
    question:IQuestion;
}

const ForumLink = ({children,isSubForum,question}:ILinkProps) => {

    if(!isSubForum){
        return (
            <Link href={{pathname:`/forum/${question.id}`,query:{
                question:question.question,
            }}}>
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