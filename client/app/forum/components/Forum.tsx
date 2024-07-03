import { Pagination } from "rsuite";
import ForumBody from "./ForumBody";
import ForumHeader from "./ForumHeader";

const Forum = () => {
    return ( 
        <div className="flex flex-col pt-16">
        <ForumHeader />
        <ForumBody />
      </div>
     );
}
 
export default Forum;