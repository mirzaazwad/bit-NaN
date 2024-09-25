import { useParams } from "react-router-dom";
import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import FloatingActionButton from "../components/FloatingActionButton";
import NewQuestionModal from "../components/ForumNewQuestion";
import ChatCard from "../components/ForumSubBody/ChatCard";
import { useChat } from "../hooks/useChat";
import { ReviewElements } from "../components/Forum/ReviewCards";
import ForumSubHeader from "../components/ForumSubBody/ForumSubHeader";
import ChatCards from "../components/ForumSubBody/ChatCards";
import { IonIcon } from "@ionic/react";
import { starSharp } from "ionicons/icons";

const ForumSubPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  

  const {
    handleSubmit,
    rawMessage,
    setPrompt,
    prompt,
    loading,
    openModal,
    chats,
    setOpenModal,
    starred,
    stars,
    handleStarring,
    error,
    setError,
  } = useChat(id);

  return (
    <AuthenticatedLayout>
      <ForumSubHeader id={id!} />
      <div className="flex justify-start ms-6 rounded-lg gap-2">
        <IonIcon
          icon={starSharp}
          className={`${
            starred ? "text-yellow-600" : "text-bitBrown"
          } text-xl border border-bitBrown px-2 py-2 rounded-lg hover:cursor-pointer`}
          onClick={() => handleStarring()}
        ></IonIcon>
        <div className="p-2">{stars}</div>
      </div>
      <NewQuestionModal
        show={openModal}
        setShow={setOpenModal}
        handleSubmit={handleSubmit}
        setPrompt={setPrompt}
        setError={setError}
      />
      <ChatCards chats={chats} />
      {prompt && (
        <ChatCard
          rawMessage={rawMessage}
          loading={loading}
          error={error ? error : ""}
          prompt={prompt}
        />
      )}
      {id && <ReviewElements id={id} reveal={true} />}
      <FloatingActionButton onClick={() => setOpenModal(true)} />
    </AuthenticatedLayout>
  );
};

export default ForumSubPage;
