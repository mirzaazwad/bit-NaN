import { ForumFindResponse } from "../../../../utils/templates/Forum";
import { ForumCardElement } from "./ForumCard";

interface IForumCards{
    forumPosts:ForumFindResponse[]
}

const ForumCards = ({forumPosts}:IForumCards) => {
    return (<>
    {
                forumPosts && forumPosts.length > 0 && forumPosts.map((forum,index) => {
                    return <ForumCardElement forum={forum} key={forum.id+index} />
                })
            }
    </>);
}
 
export default ForumCards;