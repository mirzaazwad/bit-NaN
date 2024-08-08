import { API_ROUTES } from "../../api/apiRoutes";
import { getData, postData } from "../common/apiCall";
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

    static async getProfile(): Promise<any>{
        const response = await getData(API_ROUTES.profile.fetch);
        return response.data.profile;
    }
}

export default ProfileHelper;