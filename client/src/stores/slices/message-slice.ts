/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMessage } from "../../utils/templates/Message";

export interface Message {
  messages: IMessage[];
}

const initMessageState: Message = {
  messages: [],
};

export const messageSlice = createSlice({
  name: "Group_Chat_Message",
  initialState: initMessageState,
  reducers: {
    setMessage: (state, action: PayloadAction<IMessage>) => {
      state.messages.push(action.payload);
    },
    clearMessage: (state) => {
      state.messages = [];
    },
  },
});

export const messageActions = messageSlice.actions;
export const messageReducer = messageSlice.reducer;
