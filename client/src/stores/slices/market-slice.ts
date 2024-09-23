import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Avatar } from "../../utils/templates/Avatar";

export interface MarketStore {
    items: Avatar[];
}

const initMarketState: MarketStore = {
    items: [],
}

export const marketSlice = createSlice({
    name:"market",
    initialState: initMarketState,
    reducers: {
        setItems : (state, action: PayloadAction<Avatar[]>) => {
            state.items = action.payload;
        }
    },
});

export const marketActions = marketSlice.actions;
export const marketReducer = marketSlice.reducer;