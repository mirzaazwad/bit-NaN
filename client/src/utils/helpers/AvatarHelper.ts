import { API_ROUTES } from "../../api/apiRoutes";
import { appStore } from "../../stores/redux-store";
import { marketActions } from "../../stores/slices/market-slice";
import { getData, postData } from "../common/apiCall";
import { Avatar } from "../templates/Avatar";
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

    static setData<T>(data: T, actionCreator: (data: T) => any): void {
        appStore.dispatch(actionCreator(data));
    }

    static async fetchAllItems():Promise<any>{
        const response = await getData(API_ROUTES.market.fetch);
        return response.data as Avatar[];
    }

    static async fetchItemsAndSave():Promise<void>{
        const items = await this.fetchAllItems();
        this.setData(items, marketActions.setItems);
    }
    
}