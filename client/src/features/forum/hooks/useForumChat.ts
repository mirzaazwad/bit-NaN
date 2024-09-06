import { useEffect, useState } from "react"
import { ForumHelper } from "../../../utils/helpers/forumHelper";
import ProfileHelper from "../../../utils/helpers/profileHelper";

export const useForumChat=(id:string|undefined)=>{
    const [title,setTitle]=useState<string>();
    const [description,setDescription]=useState<string>();
    const [created,setCreated]=useState<string>();
    const [modified,setModified]=useState<string>();
    const [error,setError]=useState<string>();
    const [loading,setLoading]=useState(false);
    const [username,setUsername]=useState<string>();
    const [stars,setStars]=useState<number>();
    const [reviews,setReviews]=useState<number>();

    useEffect(()=>{
        if(id){
            setError(undefined);
            setLoading(true);
            ForumHelper.getForumPostById(id).then(async(res)=>{
                setTitle(res.title);
                setDescription(res.description);
                setCreated(res.created);
                setModified(res.modified);
                const user=await ProfileHelper.getProfileByEmail(res.userEmail);
                setUsername(user.userName);
                setStars(res.stars);
                setReviews(res.reviews);
            })
            .catch((err)=>{
                setError(err.message);
            })
            .finally(()=>{
                setLoading(false);
            })
        }
    },[id])

    return {
        title,
        description,
        created,
        modified,
        error,
        loading,
        username,
        stars,
        reviews
    }
}