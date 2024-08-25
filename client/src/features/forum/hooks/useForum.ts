import { useEffect, useState } from "react";
import { ForumHelper } from "../../../utils/helpers/forumHelper";
import { useNavigate } from "react-router-dom";
import ProfileHelper from "../../../utils/helpers/profileHelper";
import { ForumFindResponse } from "../../../utils/templates/Forum";
import { forumClientHelper } from "../../../utils/helpers/forumClientHelper";

export const useForum = (forum: ForumFindResponse) => {
  const navigate = useNavigate();
  const [revealReviews, setRevealReviews] = useState(false);
  const [loading, setLoading] = useState(false);
  const [starredIdForUser, setStarredIdForUser] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [revealTimer, setRevealTimer] = useState<NodeJS.Timeout>();



  useEffect(() => {
    setLoading(true);
    ProfileHelper.getProfileByEmail(forum.userEmail)
      .then(async (res) => {
        setUsername(res.userName);
        setLoading(false);
      })
      .catch(async (err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const updateStar = async () => {
    setLoading(true);
    try {
      if(starredIdForUser===null){
        const starResponse=await ForumHelper.addStar({
          forumId:forum.id
        });
        setStarredIdForUser(starResponse.id);
      }
      else{
        await ForumHelper.deleteStar({
          id:starredIdForUser
        }).then(()=>{
          setStarredIdForUser(null);
        })
        .catch((error)=>{
          console.log(error);
        })
      }
      await forumClientHelper.refresh(forum.id);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const lazyClosingOfReviews = () => {
    setRevealTimer(setTimeout(() => setRevealReviews(false), 3500));
    () => {
      if (revealTimer) {
        clearTimeout(revealTimer);
      }
      setRevealTimer(undefined);
    };
  };

  const keepDropdownOpen = () => {
    if (revealTimer) {
      clearTimeout(revealTimer);
      setRevealTimer(undefined);
    }
  };

  return {
    navigate,
    revealReviews,
    keepDropdownOpen,
    setRevealReviews,
    loading,
    username,
    updateStar,
    lazyClosingOfReviews
  };
};
