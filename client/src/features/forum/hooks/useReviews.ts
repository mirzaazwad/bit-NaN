import { useEffect, useState } from "react";
import { ForumHelper } from "../../../utils/helpers/forumHelper";
import { ForumReviewFindResponse } from "../../../utils/templates/Forum";
import { forumClientHelper } from "../../../utils/helpers/forumClientHelper";

export const useReviews=(id:string)=>{


    const [reviews, setReviews] = useState<ForumReviewFindResponse[]>([]);
    const [review,setReview]=useState("");
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        ForumHelper.getReviews(id).then((res) => {
            setReviews(res);
        })
    }, [])

    const addReview=async()=>{
        setLoading(true);
        if(!review){
            return;
        }
        await ForumHelper.postReview({
            forumId:id,
            review
        }).then((res)=>{
            console.log(res);
            const result:ForumReviewFindResponse={
                ...res,
                modified:res.created
            };
            setReviews((reviewsTemp)=>{
                reviewsTemp.push(result);
                return reviewsTemp;
            });
            forumClientHelper.refresh(id);
        })
        .catch((err)=>{
            console.log(err);
        })
        setLoading(false);
    }


    return {
        review,
        setReview,
        reviews,
        addReview,
        loading
    }
}