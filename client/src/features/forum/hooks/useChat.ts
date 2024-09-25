/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-constant-condition */
import { useEffect, useState } from "react";
import { API_ROUTES } from "../../../api/apiRoutes";
import { ForumHelper } from "../../../utils/helpers/forumHelper";
import ProfileHelper from "../../../utils/helpers/profileHelper";

export const useChat = (id: string | undefined) => {
  const [rawMessage, setRawMessage] = useState("");
  const [prompt, setPrompt] = useState("");
  const [chats, setChats] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [starred, setStarred] = useState(false);
  const [stars, setStars] = useState(0);

  const fetchStarInformation = async() => {
    setLoading(true);
    const forum = await ForumHelper.getForumById(id!);
    setStars(forum.stars);
    const isForumStarred = await ForumHelper.getStarredOrNot(id!);
    setStarred(isForumStarred.starred);
    setLoading(false);
  }

  const handleStarring = async()=>{
    setStarred(!starred);
    if(starred){
      setStars((currentStars)=>currentStars-1);
      await ForumHelper.deleteStar({
        id:id!
      })
    }
    else{
      setStars((currentStars)=>currentStars+1);
      await ForumHelper.addStar({
        forumId:id!
      })
    }
  }

  const fetchChats = (id: string) => {
    ForumHelper.getAllForumChats(id).then((res) => {
      setChats(res);
    });
  };

  useEffect(() => {
    if (id) {
      fetchStarInformation()
      fetchChats(id);
    }
  }, [id]);

  const handleModelResponse = async () => {
    const fetchResult = await fetch(API_ROUTES.forum.model.generate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: JSON.stringify({ prompt }),
    });
    let resultingString = "";
    const reader = fetchResult.body!.getReader();
    const dec = new TextDecoder();
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const strval = dec.decode(value, { stream: true });
      const filteredStrval = strval.replace(",", "").trim();
      if (filteredStrval.startsWith("[") && !filteredStrval.endsWith("]")) {
        continue;
      } else if (
        !filteredStrval.startsWith("[") &&
        filteredStrval.endsWith("]")
      ) {
        continue;
      }
      if (filteredStrval.includes(",")) {
        resultingString += JSON.parse(`[${filteredStrval}]`);
        setRawMessage(
          (rawMessage) => rawMessage + JSON.parse(`[${filteredStrval}]`)
        );
      } else if (filteredStrval) {
        resultingString += JSON.parse(`[${filteredStrval}]`);
        setRawMessage((rawMessage) => rawMessage + JSON.parse(filteredStrval));
      }
    }
    return resultingString;
  };

  const handleSubmit = async () => {
    setRawMessage("");
    setLoading(true);
    try {
      const user = await ProfileHelper.getProfile();
      const response=await handleModelResponse();
      await rawMessage;
      console.log(response);
      if (prompt) {
        await ForumHelper.postForumChat({
          forumId: id,
          userEmail: user.userEmail,
          prompt,
          response,
        });
        await fetchChats(id!);
        setPrompt("");
      }
    } catch (error: any) {
      setError("Internal Server Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    rawMessage,
    setPrompt,
    prompt,
    loading,
    openModal,
    setOpenModal,
    setLoading,
    chats,
    error,
    setError,
    handleStarring,
    stars,
    starred
  };
};
