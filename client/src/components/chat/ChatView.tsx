import { useEffect, useState } from "react";
import { HeaderBarTheme } from "../../config/theme/reusable.theme";
import { useAppSelector } from "../../stores/redux-store";
import GroupsHelper from "../../utils/helpers/groupsHelper";
import { WebSocketService } from "../../utils/service/WebSocketService";
import { GroupType } from "../../utils/templates/Groups";
import InputComponent from "./InputComponent";
import { Message as MessageType } from "../../utils/templates/Message";
import Message from "./Message";
type IProps = {
    group: GroupType;
}
const ChatView = (props: IProps) => {

    const selectedGroup = useAppSelector(state => state.group.selectedGroup);
    const webSocketService: WebSocketService = new WebSocketService();

    const [messages, setMessages] = useState<MessageType[]>([]);
    const [message, setMessage] = useState<string>('');

    const fetchGroupHistory = async () => {
        if(selectedGroup?.id){
            try{
                const histoy = await GroupsHelper.fetchGroupHistory(selectedGroup.id);
                setMessages(histoy);
            }catch(error){
                console.log(error);
            }
           
        }   
    }

    const handleMessageReceived = (receivedMessage:MessageType) => {
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    const sendMessage = async () => {
        if(webSocketService.stompClient.connected){
            if(selectedGroup?.id){
                const chat = GroupsHelper.createMessage(message);
                webSocketService.sendMessage(selectedGroup.id, chat);
                setMessage('');
            }
            await fetchGroupHistory();
        }else{
            console.log("WebSocket is not connected.");
        }
    }

    useEffect(() => {
        fetchGroupHistory();
        
        if(selectedGroup) webSocketService.connect(selectedGroup.id, handleMessageReceived);

        return () => {
            webSocketService.disconnect();
        }
    }, [selectedGroup]);

    return (
        <>
            <div className="w-full flex flex-col rounded-md max-h-screen min-h-96 pt-1">
                <div className={`${HeaderBarTheme}`}>
                    <h3 className="font-semibold text-xl text-white">{props.group.name}</h3>
                </div>
                <div className="flex flex-col justify-end bg-gray-100 h-full">
                    <div className="flex flex-col w-full min-h-9">
                        <div className="flex flex-col">
                            {messages && messages.map((message, index) => (
                                <Message key={index} message={message.message} name={message.sender ?? "You"}/>
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
}

export default ChatView;