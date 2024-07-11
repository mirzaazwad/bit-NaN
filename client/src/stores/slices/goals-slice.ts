import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Goal {
  layoutType: string;
}

const initGoalState: Goal = {
    layoutType: "daily",  
};

export const goalSlice = createSlice({
    name: "goal",
    initialState: initGoalState,
    reducers: {
        setLayoutType: (state, action: PayloadAction<string>) => {
            state.layoutType = action.payload;
        },
    },
});

export const goalActions = goalSlice.actions;
export const goalReducer = goalSlice.reducer;