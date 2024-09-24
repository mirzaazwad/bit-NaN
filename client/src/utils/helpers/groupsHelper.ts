/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ROUTES } from "../../api/apiRoutes";
import { appStore } from "../../stores/redux-store";
import { groupActions } from "../../stores/slices/group-slice";
import { messageActions } from "../../stores/slices/message-slice";
import { getData, postData } from "../common/apiCall";
import { isDuplicate } from "../common/helper";
import { FileType } from "../enums/FileEnums";
import { MessageType } from "../enums/MessageEnums";
import { IMessage } from "../templates/Message";
import FileHelper from "./fileHelper";

class GroupsHelper{
    static async createGroup(data: any): Promise<string>{
        let request = {};

        if(data.image !== undefined){
            request = {
                picture: await FileHelper.uploadFile(data.image, FileType.GROUPPICTURE),
            }
        }

        if(data.members){
            request = {
                ...request,
                users: data.members
            }
        }

        request = {
            ...request,
            name:data.name 
        }

        const response = await postData(API_ROUTES.groups.create, request);
        return response.data;
    }

    static setData<T>(data: T, actionCreator: (data: T) => any): void {
        appStore.dispatch(actionCreator(data));
    }

    static async fetchGroups(): Promise<any>{
        const response = await getData(API_ROUTES.groups.fetch);
        this.setData(response.data.groups, groupActions.setGroups);
        return response.data.groups;
    }

    static async fetchGroupHistory(groupId: string): Promise<any>{
        const response = await getData(`${API_ROUTES.chat.history}/${groupId}`);
        return response.data;
    }

    static createMessage(
        message: string,
        sender: string
    ): IMessage{
        return {
            sender:sender,
            message:message,
            type: MessageType.CHAT,
        };
    }

    static setMessage(message:IMessage){
        if(!isDuplicate(appStore.getState().message.messages,message)){
            this.setData(message,messageActions.setMessage);
        }
    }

    static clearMessages(){
        appStore.dispatch(messageActions.clearMessage());
    }

    static async addFileToGroup(formData:FormData, groupId:string): Promise<any>{
        const res = await postData(API_ROUTES.files.upload, formData);
        
        const data = {
            groupId: groupId,
            url: res.data.url,
        }
        const response = await postData(API_ROUTES.groups.upload, data);
        console.log(response)
    }

    static async getFiles(groupId: string): Promise<any>{
        const response = await getData(`${API_ROUTES.groups.fetchFiles}/${groupId}`);
        const urls = response.data;

        if(urls && urls.length > 0){
            const files = await Promise.all(urls.map(async (url:string) => {
                return await FileHelper.getFile(url);
            }));
            return files;
        }
    }
}

export default GroupsHelper;