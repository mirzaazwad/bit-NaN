"use client";
import SearchBar from "@/app/components/general/SearchBar";
import { forumButton } from "@/app/config/theme/forum.theme";
import { useState } from "react";
import { BiFilter } from "react-icons/bi";
import { FaArrowLeft, FaClone } from "react-icons/fa";
import CloneModal from "./CloneModal";
import FilterModal from "../../components/FilterModal";


const ForumSubHeader = () => {
    const [showCloneModal, setShowCloneModal] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);
    return ( 
        <div className="flex w-full md:flex-row flex-col justify-content-center items-center px-4 py-2">
            <button className={forumButton} onClick={()=>setShowCloneModal(true)}><FaArrowLeft className="me-2"/></button>
            <SearchBar/>
            <button className={forumButton} onClick={()=>setShowCloneModal(true)}><FaClone className="me-2"/>Clone Discussion</button>
            <button className={forumButton} onClick={()=>setShowFilterModal(true)}><BiFilter className="me-2"/>Filter</button>
            <CloneModal show={showCloneModal} setShow={setShowCloneModal}/>
            <FilterModal show={showFilterModal} setShow={setShowFilterModal}/>
        </div>
     );
}
 
export default ForumSubHeader;