import { ForumFindResponse } from "../../../../utils/templates/Forum";
import { IconButton } from "rsuite";
import { BiCommentDots, BiStar } from "react-icons/bi";
import LoadingComponent from "../../../../components/general/Loading";
import {ReviewElements} from "./ReviewCards";
import { useForum } from "../../hooks/useForum";
import { memo } from "react";


interface IForum {
    forum: ForumFindResponse
}

const ForumCard = ({ forum }: IForum) => {
    const {
        navigate,
        revealReviews,
        keepDropdownOpen,
        setRevealReviews,
        loading,
        username,
        lazyClosingOfReviews,
        updateStar
    } = useForum(forum);

    if (!forum || loading) {
        return (<LoadingComponent />)
    }

    return (<div className="w-full rounded-lg mt-4 mb-6" key={forum.id} onMouseLeave={() => lazyClosingOfReviews()} onMouseEnter={()=>keepDropdownOpen()}>
        <div className="w-full rounded-t-lg text-xl bg-yellow-600 text-bitBrown px-4 py-2 font-semibold hover:cursor-pointer" onClick={() => navigate(`/forum/${forum.id}`)}>
            <div className="w-full text-xl px-4 py-2">
                {forum.title}
            </div>
            <div className="w-full text-sm px-4 py-2">
                {username}
            </div>
        </div>
        <div className="w-full text-md bg-white text-gray-400 px-4 py-2 font-semibold border border-x-bitBrown">
            <span className="italic">{forum.modified !== forum.created ? "Edited " : " "}</span>{forum.modified}
        </div>
        <div className="w-full text-lg bg-white px-4 py-2 font-semibold border border-x-bitBrown">
            {forum.description}
        </div>
        <div className="w-full flex flex-col justify-start rounded-b-lg bg-yellow-600 px-4 py-2 font-semibold text-bitBrown">
            <div className="w-full flex justify-start">
                <IconButton
                    appearance='subtle'
                    className={`hover:text-black hover:bg-yellow-700 text-bitBrown me-4`}
                    onClick={() => updateStar()}
                    icon={<BiStar />}
                ><span className="ms-2">{forum.stars}</span></IconButton>
                <IconButton
                    appearance='subtle'
                    onClick={() => setRevealReviews(!revealReviews)}
                    className={`hover:text-black hover:bg-yellow-700 text-bitBrown me-4`}
                    icon={<BiCommentDots />}
                ><span className="ms-2">{forum.reviews}</span></IconButton>
            </div>
            <ReviewElements id={forum.id} reveal={revealReviews}/>
        </div>

    </div>);
}

export const ForumCardElement=memo(ForumCard);