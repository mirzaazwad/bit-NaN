import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { goalReducer } from "./slices/goals-slice";
import { TypedUseSelectorHook, createSelectorHook } from "react-redux";
const appReducer = combineReducers({
    // Add reducers here
    goals: goalReducer
});

export const appStore = configureStore({
    reducer: appReducer,
});

type AppStoreType = ReturnType<typeof appReducer>;

export const useAppSelector = 
        createSelectorHook() as TypedUseSelectorHook<AppStoreType>;