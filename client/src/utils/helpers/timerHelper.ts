import { API_ROUTES } from "../../api/apiRoutes";
import { getData } from "../common/apiCall";
import { TimerInfo } from "../templates/timer";

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

    static async fetchTodayTimerInfo () : Promise<any> {
        const response = await getData(API_ROUTES.timer.fetchToday);
        return response.data;
    }

    static async fetchPoints (): Promise<any>{
        const response = await getData(API_ROUTES.timer.fetchPoints);
        return response.data;
    }

    static async returnTimerHoursToday(): Promise<number> {
        let totalSeconds = 0;
        const response = await this.fetchTodayTimerInfo();
    
        if(response.length > 0){
            response.forEach((timerInfo: TimerInfo) => {
                totalSeconds += timerInfo.focusTime;
            });
        }
    
        const totalHours = totalSeconds / 3600;
        return totalHours;
    }
    static formatHour = (hours: number): string => {
        const wholeHours = Math.floor(hours);
        const minutes = Math.round((hours - wholeHours) * 60);
    
        if (wholeHours === 0) {
            return `${minutes}min`;
        } else if (minutes === 0) {
            return `${wholeHours}hr`;
        } else {
            return `${wholeHours}hr ${minutes}min`;
        }
    }
}