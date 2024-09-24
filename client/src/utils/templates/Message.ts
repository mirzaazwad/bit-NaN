import { MessageType } from "../enums/MessageEnums";

export interface IMessage {
    message: string;
    sender?: string;
    type: MessageType;
    timestamp?: Date;
}