import { API_ROUTES } from "../../api/apiRoutes";
import { postData } from "../common/apiCall";
import ProfileHelper from "./profileHelper";

export default class AvatarHelper {
    static async uploadAvatar(file:File, category:string, name:string):Promise<any>{
        const formData = new FormData();
        formData.append("file", file);
        formData.append("category", category);
        formData.append("name", name);
        let username = await ProfileHelper.getProfile();
        username = username.userName;
        formData.append("username", username);

        await postData(API_ROUTES.market.publish, formData);
    }
}