import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Timer {
    isRunning: boolean;
    focus: number;
    rest: number;
    sessions: number;
    focusState: boolean;
    restState: boolean;
}

const initTimerState: Timer = {
    isRunning: false,
    focus: 60,
    rest: 60,
    sessions: 1,
    focusState: false,
    restState: false,
}

export const timerSlice = createSlice({
    name: "timer",
    initialState: initTimerState,
    reducers: {
        startTimer: (state) => {
            state.isRunning = true;
        },
        stopTimer: (state) => {
            state.isRunning = false;
        },
        startFocus: (state) => {
            state.focusState = true;
            state.restState = false;
        },
        startRest: (state) => {
            state.focusState = false;
            state.restState = true;
        },
        setFocus: (state, action: PayloadAction<number>) => {
            state.focus = action.payload;
        },
        setRest: (state, action: PayloadAction<number>) => {
            state.rest = action.payload;
        },
        setSessions: (state, action: PayloadAction<number>) => {
            state.sessions = action.payload;
        },
        decrementFocus: (state) => {
            if(state.focus > 0){
                state.focus -= 1;
            }
        },
        decrementRest: (state) => {
            if(state.rest > 0){
                state.rest -= 1;
            }
        },
    },
});

export const timerActions = timerSlice.actions;
export const timerReducer = timerSlice.reducer;