/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client, Frame, Message } from "@stomp/stompjs";
import { API_ROUTES } from "../../api/apiRoutes";
import { IMessage } from "../templates/Message";
import { MessageType } from "../enums/MessageEnums";

const SOCKET_URL = "http://localhost:8087/ws";
const token = localStorage.getItem("access");

export class WebSocketService {
  private static instance: WebSocketService;
  public isConnected: boolean = false;
  public static groupId: string = "";
  public static onMessageReceived: any;
  private stompClient?: Client;

  private constructor() {
    this.connect();
  }

  public static getInstance(): WebSocketService {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  private onConnect = (frame: Frame, firstConnection: boolean = true) => {
    console.log("Connected to WebSocket", frame);
    this.isConnected = true;
    this.subscribeToGroup(WebSocketService.groupId, WebSocketService.onMessageReceived);
    if (firstConnection) {
      const message: IMessage = {
        message: "Hello",
        type: MessageType.JOIN,
      };
      this.stompClient?.publish({
        destination: `${API_ROUTES.chat.publish}/${WebSocketService.groupId}`,
        body: JSON.stringify(message),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  };

  public connect = async (
    onConnect: (frame: Frame) => void = this.onConnect
  ) => {
    try {
      this.stompClient = new Client({
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
          this.isConnected = false;
        },
        onWebSocketClose: (event: any) => {
          console.info("Web Socket Closed: ", event);
          this.isConnected = false;
        },
        onWebSocketError: (event: any) => {
          console.warn("Web Socket Error", event);
          this.isConnected = false;
        },
        forceBinaryWSFrames: true,
        appendMissingNULLonIncoming: true,
        connectHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      await this.stompClient.activate();
    } catch (error: any) {
      console.error("WebSocket connection error:", error);
    }
  };

  public subscribeToGroup = async (groupId: string, onMessageReceived: any) => {
    return this.stompClient?.subscribe(
      `${API_ROUTES.chat.subscribe}/${groupId}`,
      (message: Message) => {
        onMessageReceived(JSON.parse(message.body));
      }
    );
  };

  public sendMessage = async (groupId: string, message: IMessage) => {
    if (!this.isConnected) {
      console.error("WebSocket is not connected. Message cannot be sent.");
      return;
    }
    try {
      await this.connect((frame: Frame) => {
        this.onConnect(frame,false);
        this.stompClient?.publish({
          destination: `${API_ROUTES.chat.publish}/${groupId}`,
          body: JSON.stringify(message),
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      });
      console.log(
        "Sending Message To: ",
        `${API_ROUTES.chat.publish}/${groupId}`
      );
      console.log("Message sent:", message);
    } catch (error) {
      console.error("Error while sending message:", error);
    }
  };

  public disconnect = () => {
    if (this.stompClient && this.stompClient.active) {
      this.stompClient.deactivate();
    }
  };
}
