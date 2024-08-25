import { memo, useEffect, useState } from "react";
import { ForumReviewFindResponse } from "../../../../utils/templates/Forum";
import ProfileHelper from "../../../../utils/helpers/profileHelper";
import LoadingComponent from "../../../../components/general/Loading";

interface IReviewCard{
    review: ForumReviewFindResponse;
}

const ReviewCard = ({review}:IReviewCard) => {

    const [username,setUsername]=useState("");
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        ProfileHelper.getProfileByEmail(review.userEmail).then((res)=>{
            setUsername(res.userName);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
        })
    },[])

    if(loading){
        return (
            <LoadingComponent/>
        )
    }

    return (
        <div className="w-full bg-white rounded-lg my-2">
            <div className="w-full px-4 py-2 bg-yellow-600 rounded-t-lg text-lg">
                {review.review}
            </div>
            <div className="w-full text-md bg-white text-gray-400 px-4 py-2 font-semibold border border-x-bitBrown">
                <span className="italic">{review.modified !== review.created ? "Edited " : " "}</span>{review.modified}
            </div>
            <div className="w-full flex justify-end px-4 py-2 bg-yellow-600 rounded-b-lg text-bitBrown">
                {username}: {review.created!==review.modified?"Edited ":" "}{review.modified}
            </div>
        </div>
    );
}

export const ReviewCardElement=memo(ReviewCard);