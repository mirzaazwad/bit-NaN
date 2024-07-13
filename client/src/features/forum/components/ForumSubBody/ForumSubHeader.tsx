import SearchBar from "../../../../components/general/SearchBar";
import { forumButton } from "../../../../config/theme/forum.theme";
import { useState } from "react";
import { BiFilter } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import FilterModal from "../FilterModal";
import { useLocation, useNavigate } from "react-router-dom";


const ForumSubHeader = () => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const location=useLocation();
    const question=location.state.question;
    const navigate=useNavigate();


    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex xl:ms-16 lg:ms-8">
                <button className={forumButton} onClick={() => navigate("/forum")}><FaArrowLeft /></button>
                <h1 className="text-3xl font-bold text-left bg-bitBrown rounded-lg text-yellow-600 px-8 py-2" style={{width:"89.5%"}}>{question}</h1>
            </div>
            <div className="w-full flex md:flex-row flex-col justify-center items-center px-4 py-2">
                <SearchBar />
                <button className={forumButton} onClick={() => setShowFilterModal(true)}><BiFilter className="me-2" />Filter</button>
                <FilterModal show={showFilterModal} setShow={setShowFilterModal} />
            </div>
        </div>
    );
}

export default ForumSubHeader;