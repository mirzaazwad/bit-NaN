"use client";
import { forumButton } from "@/app/config/theme/forum.theme";
import { IonIcon } from "@ionic/react";
import { addSharp } from "ionicons/icons";
import SearchBar from "../../components/general/SearchBar";
import ForumModal from "./ForumNewDiscussionModal";
import { useState } from "react";

const ForumHeader = () => {
    const [showNewChatModal, setShowNewChatModal] = useState(false);
    return ( 
        <div className="flex w-full md:flex-row flex-col justify-center items-center px-4 py-2">
            <SearchBar/>
            <button className={forumButton} onClick={()=>setShowNewChatModal(true)}><IonIcon icon={addSharp}></IonIcon> New Discussion</button>
            <ForumModal show={showNewChatModal} setShow={setShowNewChatModal}/>
        </div>
     );
}
 
export default ForumHeader;