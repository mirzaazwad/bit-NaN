import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Timer {
    time: number;
    isRunning: boolean;
    disabled: boolean;
    sessions: number;
}

const initTimerState: Timer = {
    time: 0,
    isRunning: false,
    disabled: false,
    sessions: 1
}

export const timerSlice = createSlice({
    name: "timer",
    initialState: initTimerState,
    reducers: {
        setDisabled: (state, action: PayloadAction<boolean>) => {
            state.disabled = action.payload;
        },
        setTime : (state , action:PayloadAction<number>) => {
            state.time = action.payload;
        }, 
        setSessions : (state, action:PayloadAction<number>) => {
            state.sessions = action.payload;
        },
        startTimer : (state, action:PayloadAction<number>) => {
            state.isRunning = true;
            state.disabled = true;
            state.sessions = action.payload;
        },
        pauseTimer: (state) => {
            state.isRunning = false;
        },
        resetTimer: (state) => {
            state.time = 0;
            state.isRunning = false;
            state.disabled = false;
        },
        incrementTime: (state) => {
            if(state.isRunning){
                state.time += 1;
            }
        }
    },
});

export const timerActions = timerSlice.actions;
export const timerReducer = timerSlice.reducer;