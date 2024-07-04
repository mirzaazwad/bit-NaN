"use client";
import SearchBar from "@/app/components/general/SearchBar";
import { forumButton } from "@/app/config/theme/forum.theme";
import { useState } from "react";
import { BiFilter } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import FilterModal from "../../components/FilterModal";


const ForumSubHeader = () => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    return ( 
        <div className="w-full flex md:flex-row flex-col justify-center items-center px-4 py-2">
            <button className={forumButton} onClick={()=>{}}><FaArrowLeft className="me-2"/></button>
            <SearchBar/>
            <button className={forumButton} onClick={()=>setShowFilterModal(true)}><BiFilter className="me-2"/>Filter</button>
            <FilterModal show={showFilterModal} setShow={setShowFilterModal}/>
        </div>
     );
}
 
export default ForumSubHeader;