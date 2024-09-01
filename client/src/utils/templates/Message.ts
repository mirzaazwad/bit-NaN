import { MessageType } from "../enums/MessageEnums";

export type Message = {
    message: string;
    groupId: string;
    sender?: string;
    type: MessageType;
    timestamp: Date;
}