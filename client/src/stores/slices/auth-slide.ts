import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Goal {
  auth: boolean;
  refresh:string;
  access:string;
}

const initialAuthState: Goal = {
    auth: false,  
    refresh:"",
    access:""
};

export const authSlice = createSlice({
    name: "goal",
    initialState: initialAuthState,
    reducers: {
        setAuthStatus: (state, action: PayloadAction<boolean>) => {
            state.auth = action.payload;
        },
        setRefreshToken: (state, action: PayloadAction<string>) => {
            state.refresh = action.payload;
        },
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.access = action.payload;
        },
    },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;