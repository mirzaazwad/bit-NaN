import { useEffect, useState } from "react";
import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import ForumHeader from "../components/Forum/ForumHeader";
import CreateForumModal from "../components/Forum/CreateForumModal";
import ForumPaginationWrapper from "../components/Forum/ForumPaginationWrapper";
import { forumClientHelper } from "../../../utils/helpers/forumClientHelper";
import LoadingComponent from "../../../components/general/Loading";


const ForumPage = () => {

  const [open,setOpen]=useState(false);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    forumClientHelper.getForumPosts()
    .then(()=>setLoading(false))
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
    <AuthenticatedLayout>
     <div className="max-w-screen m-6 px-4 py-4">
      <ForumHeader setOpen={setOpen}/>
      <CreateForumModal open={open} setOpen={setOpen}/>
      <ForumPaginationWrapper/>
     </div>
    </AuthenticatedLayout>
  );
};

export default ForumPage;
