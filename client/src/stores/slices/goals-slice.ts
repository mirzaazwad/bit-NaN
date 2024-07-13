import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GoalType } from "../../utils/templates/Goals";

export interface Goal {
  layoutType: string;
  goals: GoalType[];
}

const initGoalState: Goal = {
    layoutType: "daily",  
    goals: [],
};

export const goalSlice = createSlice({
    name: "goal",
    initialState: initGoalState,
    reducers: {
        setLayoutType: (state, action: PayloadAction<string>) => {
            state.layoutType = action.payload;
        },
        setGoals: (state, action: PayloadAction<GoalType[]>) => {
            state.goals = action.payload;
        }
    },
});

export const goalActions = goalSlice.actions;
export const goalReducer = goalSlice.reducer;