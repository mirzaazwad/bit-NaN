import { useParams } from "react-router-dom";
import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import FloatingActionButton from "../components/FloatingActionButton";
import NewQuestionModal from "../components/ForumNewQuestion";
import ChatCard from "../components/ForumSubBody/ChatCard";
import { useChat } from "../hooks/useChat";
import { ReviewElements } from "../components/Forum/ReviewCards";

const ForumSubPage = () => {

  const {id}=useParams<{id:string}>();
  console.log(id);

  const {
    handleSubmit,
    rawMessage,
    setPrompt,
    prompt,
    loading,
    openModal,
    setOpenModal,
    error,
    setError
  } = useChat(id);

  return (
    <AuthenticatedLayout>

      <NewQuestionModal show={openModal} setShow={setOpenModal} handleSubmit={handleSubmit} setPrompt={setPrompt} setError={setError} />
      {prompt && (<ChatCard prompt={prompt} rawMessage={rawMessage} error={error} loading={loading}/>)}
      {id && (<ReviewElements id={id} reveal={true}/>)}
      <FloatingActionButton onClick={() => setOpenModal(true)} />
    </AuthenticatedLayout>
  );
};

export default ForumSubPage;
