import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { API_ROUTES } from "../../api/apiRoutes";
import { Message } from "../templates/Message";

const SOCKET_URL = API_ROUTES.websocket_url.url;
export class WebSocketService {
    client: any;

    connect(groupId: string, onMessageReceived:any){
        this.client = new Client({
            webSocketFactory: () => new SockJS(SOCKET_URL),
            onConnect: () =>{
                console.log('Connected to WebSocket');
                this.subscribeToGroup(groupId, onMessageReceived);
            },

            onStompError: (frame:any) => {
                console.log("Broker reported error: " + frame.headers['message']);
                console.log("Additional details: " + frame.body);
            }
        });

        this.client.activate();
    }

    subscribeToGroup(groupId:string, onMessageReceived:any){
        this.client.subscribe(`${API_ROUTES.chat.subscribe}/${groupId}`, (message:any) => {
            onMessageReceived(JSON.parse(message.body));
        });
    }

    sendMessage(groupId: string, message:Message){
        this.client.publish({
            destination: `${API_ROUTES.chat.publish}/${groupId}`,
            body: JSON.stringify(message)
        });
    }

    disconnect(){
        if(this.client){
            this.client.deactivate();
        }
    }
}