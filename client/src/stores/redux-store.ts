import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { goalReducer } from "./slices/goals-slice";
import { useDispatch,useSelector } from 'react-redux'
import { authReducer } from "./slices/auth-slide";
import { modalReducer } from "./slices/modal-slice";
import { loaderReducer } from "./slices/loader-slice";
const appReducer = combineReducers({
    // Add reducers here
    goal: goalReducer,
    auth:authReducer,
    modal: modalReducer,
    loader:loaderReducer,
});

export const appStore = configureStore({
    reducer: appReducer,
});

type AppStoreType = ReturnType<typeof appReducer>;
export type AppDispatch = typeof appStore.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppStoreType>()

