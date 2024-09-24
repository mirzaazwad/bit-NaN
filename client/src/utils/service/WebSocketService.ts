/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client, Frame } from "@stomp/stompjs";
import { API_ROUTES } from "../../api/apiRoutes";
import { Message } from "../templates/Message";

const SOCKET_URL = "http://localhost:8087/ws";
const token = localStorage.getItem("access");

export class WebSocketService {
  public static isConnected: boolean = false;
  public static groupId: string = "";
  public static onMessageReceived: any;
  private static stompClient: Client;

  static onConnect=(frame: Frame) => {
    console.log("Connected to WebSocket", frame);
    WebSocketService.isConnected = true;
    WebSocketService.subscribeToGroup(WebSocketService.groupId, WebSocketService.onMessageReceived);
  }

  connect = async (onConnect:any=WebSocketService.onConnect) => {

    try {
      WebSocketService.stompClient=new Client({
        webSocketFactory: () => {
          return new WebSocket(SOCKET_URL);
        },
        reconnectDelay: 5000,
        debug: (msg: string) => {
          console.log(msg);
        },
        onConnect,
        onStompError: (frame: Frame) => {
          console.error("STOMP error", frame);
          WebSocketService.isConnected = false;
        },
        onWebSocketClose: (event: any) => {
          console.info("Web Socket Closed: ", event);
          WebSocketService.isConnected = false;
        },
        onWebSocketError: (event: any) => {
          console.warn("Web Socket Error", event);
          WebSocketService.isConnected = false;
        },
        forceBinaryWSFrames: true,
        appendMissingNULLonIncoming: true,
        connectHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      await WebSocketService.stompClient.activate();
    } catch (error: any) {
      console.error("WebSocket connection error:", error);
    }
  };

  static subscribeToGroup = async (groupId: string, onMessageReceived: any) => {
    return this.stompClient.subscribe(
      `${API_ROUTES.chat.subscribe}/${groupId}`,
      (message: any) => {
        onMessageReceived(JSON.parse(message.body));
      }
    );
  };

  sendMessage = async (groupId: string, message: Message) => {
    if (!WebSocketService.isConnected) {
      console.error("WebSocket is not connected. Message cannot be sent.");
      return;
    }
    try {
        await this.connect((frame:Frame)=>{
            WebSocketService.onConnect(frame);
            WebSocketService.stompClient.publish({
                destination: `${API_ROUTES.chat.publish}/${groupId}`,
                body: JSON.stringify(message),
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
        });
        console.log("Sending Message To: ",`${API_ROUTES.chat.publish}/${groupId}`)
      
      console.log("Message sent:", message);
    } catch (error) {
      console.error("Error while sending message:", error);
    }
  };

  disconnect = () => {
    if (WebSocketService.stompClient && WebSocketService.stompClient.active) {
      WebSocketService.stompClient.deactivate();
    }
  };
}
