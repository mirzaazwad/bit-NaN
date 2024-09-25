/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingComponent from "../../../../components/general/Loading";
import Markdown from "react-markdown";
import CodeBlock from "../CodeBlock";
import { Message } from "rsuite";

interface IChatCard {
  prompt: string;
  error?: string;
  loading: boolean;
  rawMessage: string;
}

const ChatCard = ({ prompt, error, loading, rawMessage }: IChatCard) => {
  const components = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  if (rawMessage === "" ) {
    return <></>;
  }

  if(rawMessage==="[object Object]"){
    return (
      <></>
    )
  }

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
        <div className="w-full bg-bitBrown text-yellow-600 mx-auto px-4 py-2 rounded-b-lg">
          {error && <Message type="error">{error}</Message>}
          {loading && <LoadingComponent />}
          <Markdown children={rawMessage} components={components} />
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
