import { MessageType } from "../enums/MessageEnums";

export type Message = {
    message?: string;
    groupId: string;
    type: MessageType;
    sender: string;
    timestamp: Date;
}