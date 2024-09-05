import { Frame, Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { API_ROUTES } from "../../api/apiRoutes";
import { Message } from "../templates/Message";

const SOCKET_URL = API_ROUTES.websocket_url.url;
const token = localStorage.getItem("access");
export class WebSocketService {
    stompClient: any;
    isConnected: boolean = false;
    
    connect(groupId: string, onMessageReceived: any,) {
        if (!this.isConnected) {
            this.stompClient = Stomp.over(() => new SockJS(SOCKET_URL));

            const headers = {
                "Authorization": `Bearer ${token}`,
            };

            this.stompClient.onConnect = (frame: Frame) => {
                console.log("Connected to WebSocket", frame);
                this.subscribeToGroup(groupId, onMessageReceived);
                this.isConnected = true;
            };

            this.stompClient.onStompError = (frame: Frame) => {
                console.error("STOMP error", frame);
            };

            this.stompClient.onWebSocketClose = (event: any) => {
                console.error("WebSocket closed", event);
            };

            this.stompClient.onWebSocketError = (event: any) => {
                console.error("WebSocket error", event);
            }

            this.stompClient.activate({
                connectHeaders: headers, 
            });
        } else {
            this.subscribeToGroup(groupId, onMessageReceived);
        }
    }

    subscribeToGroup(groupId: string, onMessageReceived: any) {
        this.stompClient.subscribe(`${API_ROUTES.chat.subscribe}/${groupId}`, (message: any) => {
            onMessageReceived(JSON.parse(message.body));
        });
    }

    sendMessage(groupId: string, message: Message) {
        this.stompClient.publish({
            destination: `${API_ROUTES.chat.publish}/${groupId}`,
            body: JSON.stringify(message),
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
    }

    disconnect() {
        if (this.stompClient && this.stompClient.active) {
            this.stompClient.deactivate();
        }
    }
}