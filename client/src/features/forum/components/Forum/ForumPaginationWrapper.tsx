import { useAppSelector } from "../../../../stores/redux-store";
import { useEffect, useState } from "react";
import { Pagination } from "rsuite";
import { ForumFindResponse } from "../../../../utils/templates/Forum";
import ForumCards from "./ForumCards";


const ForumPaginationWrapper = () => {

    const filteredForumPosts = useAppSelector((state) => state.forum.filteredForumPosts);
    const [activePage, setActivePage] = useState(1);
    const [activePosts,setActivePosts]=useState<ForumFindResponse[]>([]);
    const [limit]=useState(5);

    const min=(a:number,b:number)=>{
        if(a<b){
            return a;
        }
        else{
            return b;
        }
    }

    const getRange=(activePage:number)=>{
        return {
            lower:(activePage-1)*limit,
            upper:min(activePage*limit,filteredForumPosts.length)
        }
    }

    useEffect(()=>{
        const range=getRange(activePage);
        setActivePosts(filteredForumPosts.slice(range.lower,range.upper));
    },[filteredForumPosts])

    const handleChangeActive=(e:number)=>{
        setActivePage(e);
        const range=getRange(e);
        setActivePosts(filteredForumPosts.slice(range.lower,range.upper));
    }

    return (
        <div className="w-full">
            <div className="w-full flex justify-center items-center my-8">
                <Pagination
                    prev
                    last
                    next
                    first
                    ellipsis
                    size="lg"
                    total={filteredForumPosts.length}
                    limit={5}
                    activePage={activePage}
                    onChangePage={handleChangeActive}
                    itemType=""
                />
            </div>
            <ForumCards forumPosts={activePosts}/>
        </div>
    )
}

export default ForumPaginationWrapper;