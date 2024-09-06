import LoadingComponent from "../../../../components/general/Loading";
import Markdown from "react-markdown";
import CodeBlock from "../CodeBlock";
import { Message, Tooltip, Whisper } from "rsuite";
import { GoReport } from "react-icons/go";
import { forumButton } from "../../../../config/theme/forum.theme";
import { chatbubbleEllipsesSharp } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

interface IChatCard {
  prompt: string;
  error?: string;
  loading: boolean;
  rawMessage: string;
}

const ChatCard = ({ prompt, error, loading, rawMessage }: IChatCard) => {
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
    <div className="w-full flex flex-col justify-start">
      <div className="w-2/3 rounded-lg m-4">
        <div className="w-full mx-auto bg-yellow-600 text-bitBrown px-4 py-2 text-2xl rounded-t-lg">
          {prompt}
        </div>
        <div className="w-full mx-auto bg-yellow-600 text-bitBrown px-4 py-2 text-md flex gap-2">
          Asked by <div className="font-bold">Mirza Mohammad Azwad</div>
        </div>
        <div className="w-full mx-auto bg-yellow-600 text-bitBrown px-4 py-2 text-md flex gap-2 text-gray-800 font-bold">
          {new Date().toLocaleDateString() +
            " " +
            new Date().toLocaleTimeString()}
        </div>
        <div className="w-full bg-bitBrown text-yellow-600 mx-auto px-4 py-2">
          {error && <Message type="error">{error}</Message>}
          {loading && <LoadingComponent />}
          <Markdown children={rawMessage} components={components} />
        </div>
        <div className="w-full mx-auto bg-yellow-600 text-bitBrown px-4 py-2 px-4 py-2 rounded-b-lg flex flex-row gap-2 justify-start">
          <button className={forumButton} onClick={() => {}}>
            <BiSolidUpArrow className="me-2" />
            {10}
          </button>
          <button className={forumButton} onClick={() => {}}>
            <BiSolidDownArrow className="me-2" />
            {20}
          </button>
          <button className={forumButton} onClick={() => {}}>
            <IonIcon icon={chatbubbleEllipsesSharp} className="me-2" />
            {3}
          </button>
          <Whisper
            trigger="hover"
            placement="topEnd"
            controlId={`control-id-button`}
            speaker={<Tooltip>Report this Response</Tooltip>}
          >
            <button className={forumButton} onClick={() => {}}>
              <GoReport />
            </button>
          </Whisper>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
