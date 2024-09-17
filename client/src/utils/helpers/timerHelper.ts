import { API_ROUTES } from "../../api/apiRoutes";
import { getData } from "../common/apiCall";

export class TimerControlUtils {
    static switchFocus(focus: boolean){
        return focus ? false : true;
    }

    static formatTime (timeInSeconds: number):string {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    static async fetchTimerInfo () : Promise<any> {
        const response = await getData(API_ROUTES.timer.fetch);
        return response.data;
    }
}