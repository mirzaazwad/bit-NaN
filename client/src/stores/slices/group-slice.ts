import { createSlice } from "@reduxjs/toolkit";
import { GroupType } from "../../utils/templates/Groups";
import { Profile } from "../../utils/templates/Profile";

export interface Group {
    groups: GroupType[];
    selectedGroup?: GroupType;
    users?:Profile[];
}

const initGroupState: Group = {
    groups: [],
    selectedGroup: undefined,
    users: [],
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
        },
        setGroupUsers: (state, action) => {
            state.users = action.payload
        }
    },
});

export const groupActions = groupSlice.actions;
export const groupReducer = groupSlice.reducer;