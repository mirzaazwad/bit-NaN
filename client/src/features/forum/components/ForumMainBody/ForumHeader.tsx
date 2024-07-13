import { forumButton } from "../../../../config/theme/forum.theme";
import { IonIcon } from "@ionic/react";
import { addSharp } from "ionicons/icons";
import SearchBar from "../../../../components/general/SearchBar";
import ForumModal from "./ForumNewDiscussionModal";
import { useState } from "react";
import { BiFilter } from "react-icons/bi";
import FilterModal from "../FilterModal";

const ForumHeader = () => {
    const [showNewChatModal, setShowNewChatModal] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);
    return ( 
        <div className="flex w-full md:flex-row flex-col justify-center items-center px-4 py-2">
            <SearchBar/>
            <button className={forumButton} onClick={()=>setShowFilterModal(true)}><BiFilter/> Filter</button>
            <button className={forumButton} onClick={()=>setShowNewChatModal(true)}><IonIcon icon={addSharp}></IonIcon> New Discussion</button>
            <ForumModal show={showNewChatModal} setShow={setShowNewChatModal}/>
            <FilterModal show={showFilterModal} setShow={setShowFilterModal}/>
        </div>
     );
}
 
export default ForumHeader;