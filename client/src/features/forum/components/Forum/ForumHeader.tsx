import { HeaderBarTheme } from "../../../../config/theme/reusable.theme";
import { useAppSelector } from "../../../../stores/redux-store";
import { forumClientHelper } from "../../../../utils/helpers/forumClientHelper";

interface IForumHeader{
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ForumHeader = ({setOpen}:IForumHeader) => {

    const search = useAppSelector((state)=>state.forum.searchCriteria);
    
    return ( 
        <div className="w-full flex flex-col">
            <div className={`${HeaderBarTheme}`}>
                <h3 className="font-semibold text-xl text-white">Forum</h3>
            </div>
            <div className="w-full m-4 px-4 py-4 flex flex-row justify-end">
                <input type="text" value={search} onChange={(e)=>forumClientHelper.searchForumPosts(e.target.value)} placeholder="Search" className="lg:w-3/4 w-1/2 border border-bitBrown px-4 rounded-lg m-4"/>
                <button className={`bg-yellow-600 px-4 py-2 m-4 rounded-lg text-bitBrown hover:scale-105 scale:100`} onClick={()=>setOpen(true)}>Create New Forum</button>
            </div>
        </div>
     );
}
 
export default ForumHeader;