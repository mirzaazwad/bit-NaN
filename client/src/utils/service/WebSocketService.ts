import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { API_ROUTES } from "../../api/apiRoutes";
import { Message } from "../templates/Message";

const SOCKET_URL = API_ROUTES.websocket_url.url;
export class WebSocketService {
    stompClient = Stomp.over(() => new SockJS(SOCKET_URL));

    connect(groupId: string, onMessageReceived:any){
        if(!this.stompClient.connected){
            this.stompClient.connect({}, () => {
                this.subscribeToGroup(groupId, onMessageReceived);
            });
        }
    }

    subscribeToGroup(groupId:string, onMessageReceived:any){
        this.stompClient.subscribe(`${API_ROUTES.chat.subscribe}/${groupId}`, (message:any) => {
            onMessageReceived(JSON.parse(message.body));
        });
    }

    sendMessage(groupId: string, message:Message){
        this.stompClient.send(
            `${API_ROUTES.chat.publish}/${groupId}`,
            {},
            JSON.stringify(message)
        );
    }

    disconnect(){
        if(this.stompClient && this.stompClient.connected){
            this.stompClient.disconnect(() => {
                console.log("Disconnected");
            });
        }
    }
}