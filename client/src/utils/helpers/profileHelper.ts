import { API_ROUTES } from "../../api/apiRoutes";
import { postData } from "../common/apiCall";
import { FileType } from "../enums/FileEnums";
import FileHelper from "./fileHelper";

class ProfileHelper{
    static async updateProfile(data:any): Promise<string>{
        let request = {};

        if(data.picture !== undefined){
            request = {
                picture: await FileHelper.uploadFile(data.picture, FileType.PROFILEPICTURE),
            }
        }

        if(data.username){
            request = {
                ...request,
                username: data.username
            }
        }

        const response = await postData(API_ROUTES.profile.update, request);
        return response.data;
    }
}

export default ProfileHelper;