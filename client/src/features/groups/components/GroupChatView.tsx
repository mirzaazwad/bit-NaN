import ChatView from "../../../components/chat/ChatView";
import { useAppSelector } from "../../../stores/redux-store";

const GroupChatView = () => {
    const selectedGroup = useAppSelector(state => state.group.selectedGroup);

    return(
        <>
            {selectedGroup ? (
                <ChatView group={selectedGroup} />
            ):(
                <div>
                    <h3 className="text-gray-800 text-lg font-semibold ml-2">No group selected</h3>
                </div>
            )}
        </>
    );
}

export default GroupChatView;