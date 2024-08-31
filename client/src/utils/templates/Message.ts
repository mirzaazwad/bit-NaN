import { MessageType } from "../enums/MessageEnums";

export type Message = {
    content?: string;
    group: string;
    type: MessageType;
}