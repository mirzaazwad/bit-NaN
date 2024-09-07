import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Timer {
    time: number;
    isRunning: boolean;
}

const initTimerState: Timer = {
    time: 0,
    isRunning: false,
}

export const timerSlice = createSlice({
    name: "timer",
    initialState: initTimerState,
    reducers: {
        setTime : (state , action:PayloadAction<number>) => {
            state.time = action.payload;
        }, 
        startTimer : (state) => {
            state.isRunning = true;
        },
        stopTimer: (state) => {
            state.isRunning = false;
        },
        resetTimer: (state) => {
            state.time = 0;
            state.isRunning = false;
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