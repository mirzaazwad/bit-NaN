import { createSlice } from "@reduxjs/toolkit";
import { GroupType } from "../../utils/templates/Groups";

export interface Group {
    groups: GroupType[];
}

const initGroupState: Group = {
    groups: [],
};

export const groupSlice = createSlice({
    name: "group",
    initialState: initGroupState,
    reducers: {
        setGroups: (state, action) => {
            state.groups = action.payload;
        },
    },
});

export const groupActions = groupSlice.actions;
export const groupReducer = groupSlice.reducer;