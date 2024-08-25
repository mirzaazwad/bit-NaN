import { useState } from "react";
import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import LoadingComponent from "../../../components/general/Loading";
import Markdown from "react-markdown";
import CodeBlock from "../components/CodeBlock";
import FloatingActionButton from "../components/FloatingActionButton";
import NewQuestionModal from "../components/ForumNewQuestion";
import { Message, Tooltip, Whisper } from "rsuite";
import { GoReport } from "react-icons/go";
import { forumButton } from "../../../config/theme/forum.theme";
import { chatbubbleEllipsesSharp } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { API_ROUTES } from "../../../api/apiRoutes";

const ForumSubPage = () => {
  const [rawMessage, setRawMessage] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleSubmit = async () => {
    setRawMessage("");
    setLoading(true);
    try {
      const fetchResult = await fetch(API_ROUTES.forum.model.generate, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("access")}`
        },
        body: JSON.stringify({ prompt })
      });

      const reader = fetchResult.body!.getReader();
      const dec = new TextDecoder();
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const strval = dec.decode(value, { stream: true });
        const filteredStrval = strval.replace(",", "").trim();
        if (filteredStrval.startsWith("[") && !filteredStrval.endsWith("]")) {
          continue;
        }
        else if (!filteredStrval.startsWith("[") && filteredStrval.endsWith("]")) {
          continue;
        }
        if (filteredStrval.includes(",")) {
          setRawMessage((rawMessage) => rawMessage + JSON.parse(`[${filteredStrval}]`));
        } else if (filteredStrval) {
          setRawMessage((rawMessage) => rawMessage + JSON.parse(filteredStrval));
        }
      }
    }
    catch (error: any) {
      setError("Internal Server Error: " + error.message);
    }
    finally {
      setLoading(false);
    }
  };

  const components = {
    code({ node, inline, className, children, ...props }: any) {
      return !inline ? (
        <CodeBlock code={String(children).replace(/\n$/, "")} />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    text({ children }: any) {
      const text = String(children);
      if (text.startsWith("```") || text.startsWith("~~~")) {
        return <CodeBlock code={text.replace(/^```|~~~|```$/, "")} />;
      }
      return <span>{text}</span>;
    },
  };

  return (
    <AuthenticatedLayout>
      <NewQuestionModal show={openModal} setShow={setOpenModal} handleSubmit={handleSubmit} setPrompt={setPrompt} setError={setError} />
      {prompt && (<div className="w-full flex flex-col justify-start">
        <div className="w-2/3 rounded-lg m-4">
          <div className="w-full mx-auto bg-yellow-600 text-bitBrown px-4 py-2 text-2xl rounded-t-lg">
            {prompt}
          </div>
          <div className="w-full mx-auto bg-yellow-600 text-bitBrown px-4 py-2 text-md flex gap-2">
            Asked by <div className="font-bold">Mirza Mohammad Azwad</div>
          </div>
          <div className="w-full mx-auto bg-yellow-600 text-bitBrown px-4 py-2 text-md flex gap-2 text-gray-800 font-bold">
            {new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}
          </div>
          <div className="w-full bg-bitBrown text-yellow-600 mx-auto px-4 py-2">
            {error && (<Message type="error">
              {error}
            </Message>)}
            {loading && (<LoadingComponent />)}
            <Markdown
              children={rawMessage}
              components={components}
            />
          </div>
          <div className="w-full mx-auto bg-yellow-600 text-bitBrown px-4 py-2 px-4 py-2 rounded-b-lg flex flex-row gap-2 justify-start">
            <button className={forumButton} onClick={() => { }}><BiSolidUpArrow className="me-2" />{10}</button>
            <button className={forumButton} onClick={() => { }}><BiSolidDownArrow className="me-2" />{20}</button>
            <button className={forumButton} onClick={() => { }}><IonIcon icon={chatbubbleEllipsesSharp} className="me-2" />{3}</button>
            <Whisper trigger="hover" placement="topEnd" controlId={`control-id-button`} speaker={<Tooltip>Report this Response</Tooltip>}>
              <button className={forumButton} onClick={() => { }}><GoReport /></button>
            </Whisper>
          </div>
        </div>
      </div>)}
      <FloatingActionButton onClick={() => setOpenModal(true)} />
    </AuthenticatedLayout>
  );
};

export default ForumSubPage;
