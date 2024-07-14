import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ILoader {
    isLoading: boolean;
    message: string;
}

const initialState: ILoader = {
    isLoading: false,
    message: ''
}

const loaderSlice = createSlice({
    name: 'loader',
    initialState:initialState,
    reducers: {
        turnOn: (state: ILoader, action: PayloadAction<ILoader>) => {
            state.isLoading = true;
            state.message = action.payload.message;
        },
        turnOff: (state:ILoader) => {
            state.isLoading = false;
            state.message = '';
        }
    }
});

export const loaderActions = loaderSlice.actions;
export const loaderReducer = loaderSlice.reducer;