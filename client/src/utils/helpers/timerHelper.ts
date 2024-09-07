export class TimerControlUtils {
    static switchFocus(focus: boolean){
        return focus ? false : true;
    }

    static formatTime (timeInSeconds: number):string {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}