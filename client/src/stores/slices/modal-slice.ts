import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalStoreType } from "../../utils/templates/modalType";

const initState: ModalStoreType = {
    type: "",
    data: {},
};

const modalSlice = createSlice({
    name: "modal",
    initialState: initState,
    reducers:{
        addModal: (
            state: ModalStoreType, action: PayloadAction<ModalStoreType>
        ) => {
            state.data = action.payload.data;
            state.type = action.payload.type;
        },
        updateModalType: (
            state: ModalStoreType,
            action: PayloadAction<string>
        ) =>{
            state.type = action.payload;
        },

        updateModalData: (
            state: ModalStoreType,
            action: PayloadAction<any>
        ) =>{
            state.data = action.payload;
        },
        removeModal:(state: ModalStoreType) => {
            state.data = {};
            state.type = "";
        }
    },
});

export const modalActions = modalSlice.actions;
export const modalReducer = modalSlice.reducer;