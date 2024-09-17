import { appStore } from "../../stores/redux-store";
import { timerActions } from "../../stores/slices/timer-slice";

export default class TimerService {
    private static instance: TimerService;
    private intervalId: any;
    private initFocusTime: number = 60;
    private initRestTime: number = 60;

    private constructor() { }

    static getInstance() {
        if (TimerService.instance) {
            return TimerService.instance;
        }

        TimerService.instance = new TimerService();
        return TimerService.instance;
    }

    public start(): void {
        const state = appStore.getState().timer;

        if (!state.isRunning) {
            this.initFocusTime = state.focus;
            this.initRestTime = state.rest;

            appStore.dispatch(timerActions.startTimer());
            appStore.dispatch(timerActions.startFocus());

            this.startFocusCountdown();
        }
    }

    private startFocusCountdown() {
        this.clearExistingInterval();
        const state = appStore.getState().timer;
        if(state.focus===0){

        }

        this.intervalId = setInterval(() => {
            const currentState = appStore.getState().timer;

            if (currentState.focus > 0) {
                appStore.dispatch(timerActions.decrementFocus());
            } else {
                this.startRestCountdown();
            }
        }, 1000);
    }

    private startRestCountdown() {
        this.clearExistingInterval();

        appStore.dispatch(timerActions.startRest());

        this.intervalId = setInterval(() => {
            const currentState = appStore.getState().timer;

            if (currentState.rest > 0) {
                appStore.dispatch(timerActions.decrementRest());
            } else {
                this.completeSession();
            }
        }, 1000);
    }

    private completeSession() {
        const state = appStore.getState().timer;

        if (state.sessions > 0) {

            appStore.dispatch(timerActions.setFocus(this.initFocusTime));
            appStore.dispatch(timerActions.setRest(this.initRestTime));

            appStore.dispatch(timerActions.setSessions(state.sessions - 1));
            appStore.dispatch(timerActions.startFocus());
            this.startFocusCountdown();
        } else {
            this.stop();
        }
    }

    private stop(): void {
        this.clearExistingInterval();
        appStore.dispatch(timerActions.stopTimer());
    }

    private clearExistingInterval() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}