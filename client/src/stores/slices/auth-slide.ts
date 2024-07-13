import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuth {
  auth: boolean;
  refresh:string;
  access:string;
}

const getRefreshToken=():string=>{
    if(localStorage.getItem("refresh")!==null){
        return localStorage.getItem("refresh") as string;
    }
    return ""
}

const getAccessToken=():string=>{
    if(localStorage.getItem("access")!==null){
        return localStorage.getItem("access") as string;
    }
    return ""
}

const initialAuthState: IAuth = {
    auth: false,  
    refresh: getRefreshToken(),
    access:getAccessToken()
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
            localStorage.setItem("refresh",action.payload);
        },
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.access = action.payload;
            localStorage.setItem("access",action.payload);
        },
    },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;