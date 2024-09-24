/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client, Frame } from "@stomp/stompjs";
import { API_ROUTES } from "../../api/apiRoutes";
import { Message } from "../templates/Message";

const SOCKET_URL = "http://localhost:8087/ws";
const token = localStorage.getItem("access");
export class WebSocketService {
  public static isConnected: boolean = false;
  private stompClient: Client = new Client({
    webSocketFactory: () => {
      const sock = new WebSocket(SOCKET_URL);
      return sock;
    },
    reconnectDelay: 5000,
    debug: (msg: string) => {
      console.log(msg);
    },
    onConnect: (frame: Frame) => {
      console.log("Connected to WebSocket", frame);
      WebSocketService.isConnected = true;
    },
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

  connect = async (groupId: string, onMessageReceived: any) => {
    try {
      if (!WebSocketService.isConnected) {
        await this.stompClient.activate();
        if (WebSocketService.isConnected) {
          this.subscribeToGroup(groupId, onMessageReceived);
        }
      } else {
        this.subscribeToGroup(groupId, onMessageReceived);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  subscribeToGroup = (groupId: string, onMessageReceived: any) => {
    this.stompClient?.subscribe(
      `${API_ROUTES.chat.subscribe}/${groupId}`,
      (message: any) => {
        onMessageReceived(JSON.parse(message.body));
      }
    );
  };

  sendMessage = (groupId: string, message: Message) => {
    this.stompClient?.publish({
      destination: `${API_ROUTES.chat.publish}/${groupId}`,
      body: JSON.stringify(message),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  disconnect = () => {
    if (this.stompClient && this.stompClient.active) {
      this.stompClient.deactivate();
    }
  };
}
