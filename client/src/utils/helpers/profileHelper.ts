import { API_ROUTES } from "../../api/apiRoutes";
import { getData, postData } from "../common/apiCall";
import { FileType } from "../enums/FileEnums";
import FileHelper from "./fileHelper";

class ProfileHelper{

    private static profileMap=new Map<string,NonNullable<unknown>>();

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
        this.profileMap.set(response.data.profile.userEmail,response.data.profile);
        return response.data.profile;
    }

    static async getProfileByEmail(email:string): Promise<any>{
        if(this.profileMap.has(email)){
            return this.profileMap.get(email);
        }
        const response = await getData(API_ROUTES.profile.findByEmail+email);
        console.log(response)
        this.profileMap.set(response.data.profile.userEmail,response.data.profile);
        return response.data.profile;
    }

    static async saveProduct(id:string):Promise<any>{
        const data = {id:id};
        await postData(API_ROUTES.profile.saveProduct, data);
    }
}

export default ProfileHelper;