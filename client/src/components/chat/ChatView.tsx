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

    const fetchGroupHistory = async () => {
        if(selectedGroup?.id){
            const histoy = await GroupsHelper.fetchGroupHistory(selectedGroup.id);
            setMessages(histoy);
        }   
    }

    const handleMessageReceived = (receivedMessage:MessageType) => {
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    }

    useEffect(() => {
        fetchGroupHistory();
        
        if(selectedGroup) webSocketService.connect(selectedGroup.id, handleMessageReceived);

        return () => {
            webSocketService.disconnect();
        }
    }, [selectedGroup])

    return (
        <>
            <div className="w-full flex flex-col rounded-md max-h-screen min-h-96 pt-1">
                <div className={`${HeaderBarTheme}`}>
                    <h3 className="font-semibold text-xl text-white">{props.group.name}</h3>
                </div>
                <div className="flex flex-col justify-end bg-gray-100 h-full">
                    <div className="flex flex-col w-full min-h-9">
                        <div className="flex flex-col">
                            <Message name="John Doe" message="Hello World!" />
                            <Message name="John Doe" message="Hello World!" />
                        </div>
                    </div>
                    <div className="flex w-full h-24">
                        <InputComponent />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatView;