/* eslint-disable @typescript-eslint/no-explicit-any */
import ChatCard from "./ChatCard";

const ChatCards = ({chats}:{chats:any[]}) => {
    return ( 
        <div className="w-full flex flex-col mx-auto justify-center items-center">
            {chats && chats.length>0 && chats.map((chat)=>{
                return (<ChatCard error="" rawMessage={chat.response} prompt={chat.prompt} loading={false}/>)
            })}
        </div>
     );
}
 
export default ChatCards;