import { API_ROUTES } from "../../api/apiRoutes";
import { postData } from "../common/apiCall";
import { FileType } from "../enums/FileEnums";
import { GroupRequest } from "../templates/Groups";
import FileHelper from "./fileHelper";

class GroupsHelper{
    static async createGroup(data: GroupRequest): Promise<string>{
        let request = {};

        if(data.image !== undefined){
            request = {
                picture: await FileHelper.uploadFile(data.image, FileType.GROUPPICTURE),
            }
        }

        if(data.members){
            request = {
                ...request,
                members: data.members
            }
        }

        request = {
            ...request,
            name:data.name 
        }

        const response = await postData(API_ROUTES.groups.create, data);
        return response.data;
    }
}

export default GroupsHelper;