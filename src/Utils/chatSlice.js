import { createSlice } from "@reduxjs/toolkit";
import {MESSAGE_COUNT} from './constants'

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > MESSAGE_COUNT) {
        state.messages.splice(MESSAGE_COUNT, 1);
      }
      state.messages.unshift(action.payload);
    },
   
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;