import { useEffect, useState } from "react";
import { HeaderBarTheme } from "../../config/theme/reusable.theme";
import { useAppSelector } from "../../stores/redux-store";
import GroupsHelper from "../../utils/helpers/groupsHelper";
import { WebSocketService } from "../../utils/service/WebSocketService";
import { GroupType } from "../../utils/templates/Groups";
import InputComponent from "./InputComponent";
import { IMessage as MessageType } from "../../utils/templates/Message";
import Message from "./Message";
import LoadingComponent from "../general/Loading";
import ProfileHelper from "../../utils/helpers/profileHelper";

type IProps = {
  group: GroupType;
};

const ChatView = (props: IProps) => {
  const [loading, setLoading] = useState(true);
  const selectedGroup = useAppSelector((state) => state.group.selectedGroup);
  const webSocketService = WebSocketService.getInstance();
  const messages = useAppSelector((state) => state.message.messages);
  const [message, setMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const fetchChatHistory = async () => {
    if (selectedGroup?.id) {
      try {
        const history = await GroupsHelper.fetchGroupHistory(selectedGroup.id);
        const fetchedMessages: MessageType[] = history ?? [];
        fetchedMessages.forEach((element: MessageType) => {
          GroupsHelper.setMessage(element);
        });
        console.log(messages);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchProfileInformation = async () => {
    const user = await ProfileHelper.getProfile();
    setUsername(user.userName);
  };

  const handleMessageReceived = (receivedMessage: MessageType) => {
    GroupsHelper.setMessage(receivedMessage);
  };

  const sendMessage = async () => {
    if (webSocketService.isConnected) {
      if (selectedGroup?.id) {
        console.log(message);
        const chat = GroupsHelper.createMessage(message, username);
        webSocketService.sendMessage(selectedGroup.id, chat);
        setMessage("");
      }
    } else {
      console.log("WebSocket is not connected.");
    }
  };

  useEffect(() => {
    GroupsHelper.clearMessages()
    fetchProfileInformation().then(() => {
      if (selectedGroup) {
        console.log(username);
        WebSocketService.sender = username;
        WebSocketService.groupId = selectedGroup.id;
        WebSocketService.onMessageReceived = handleMessageReceived;
        webSocketService
          .connect()
          .then(async () => {
            await fetchChatHistory();
            setLoading(false);
          })
          .catch((err) => console.error(err));
      }
    });
    return () => {
      webSocketService.disconnect();
    };
  }, [selectedGroup]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <div className="w-full flex flex-col rounded-md max-h-screen min-h-96 pt-1">
        <div className={`${HeaderBarTheme}`}>
          <h3 className="font-semibold text-xl text-white">
            {props.group.name}
          </h3>
        </div>
        <div className="flex flex-col justify-end bg-gray-100 h-full">
          <div className="flex flex-col w-full min-h-9">
            <div className="flex flex-col">
              {messages &&
                messages.map((message, index) => (
                  <Message
                    key={index}
                    message={message.message}
                    name={message.sender}
                  />
                ))}
            </div>
          </div>
          <div className="flex w-full h-24">
            <InputComponent
              message={message}
              onSubmitClick={sendMessage}
              onChangeInput={(value) => setMessage(value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatView;
