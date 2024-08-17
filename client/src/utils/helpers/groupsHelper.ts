import { API_ROUTES } from "../../api/apiRoutes";
import { appStore } from "../../stores/redux-store";
import { groupActions } from "../../stores/slices/group-slice";
import { getData, postData } from "../common/apiCall";
import { FileType } from "../enums/FileEnums";
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

        const response = await postData(API_ROUTES.groups.create, data);
        return response.data;
    }

    static setData<T>(data: T, actionCreator: (data: T) => any): void {
        appStore.dispatch(actionCreator(data));
    }

    static async fetchGroups(): Promise<void>{
        const response = await getData(API_ROUTES.groups.fetch);
        this.setData(response.data.groups, groupActions.setGroups);
    }
}

export default GroupsHelper;