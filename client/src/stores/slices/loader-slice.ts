import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ILoader {
    isLoading: boolean;
    message: string;
}

const initialState: ILoader = {
    isLoading: false,
    message: 'Loading...'
}

const loaderSlice = createSlice({
    name: 'loader',
    initialState:initialState,
    reducers: {
        turnOn: (state: ILoader) => {
            state.isLoading = true;
        },
        turnOff: (state:ILoader) => {
            state.isLoading = false;
            state.message = '';
        },
        turnOnWithMessage: (state: ILoader, action: PayloadAction<string>) => {
            state.isLoading = true;
            state.message = action.payload;
        
        }
    }
});

export const loaderActions = loaderSlice.actions;
export const loaderReducer = loaderSlice.reducer;