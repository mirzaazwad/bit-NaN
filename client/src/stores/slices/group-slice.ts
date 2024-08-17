import { createSlice } from "@reduxjs/toolkit";
import { GroupType } from "../../utils/templates/Groups";

export interface Group {
    groups: GroupType[];
    selectedGroup?: GroupType;
}

const initGroupState: Group = {
    groups: [],
    selectedGroup: undefined,
};

export const groupSlice = createSlice({
    name: "group",
    initialState: initGroupState,
    reducers: {
        setGroups: (state, action) => {
            state.groups = action.payload;
        },
        setSelectedGroup: (state, action) => {
            state.selectedGroup = action.payload;
        }
    },
});

export const groupActions = groupSlice.actions;
export const groupReducer = groupSlice.reducer;