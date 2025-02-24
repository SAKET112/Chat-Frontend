import { createSlice } from "@reduxjs/toolkit";
import {
  clearAsyncData,
  getAsyncData,
  saveAsyncData,
} from "../utils/AsyncStorageHelper";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isPasscodeEnter: false,
  hasPasscode: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.hasPasscode = action.payload.hasPasscode;
      saveAsyncData("@chat_user_token", action.payload.token);
    },

    setPasscodeSuccess: (state) => {
      state.hasPasscode = true;
    },

    setToken: (state) => {
      getAsyncData("@chat_user_token")
        .then((response) => {
          state.token = response;
        })
        .catch((error) => console.log("something Went Wrong"));
    },

    setIsPasscodeEnterTrue: (state) => {
      state.isPasscodeEnter = true;
    },
    setIsPasscodeEnterFalse: (state) => {
      state.isPasscodeEnter = false;
    },

    setSignOut: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      clearAsyncData("@chat_user_token");
    },
  },
});

export const {
  setSignIn,
  setSignOut,
  setToken,
  setPasscodeSuccess,
  setIsPasscodeEnterFalse,
  setIsPasscodeEnterTrue,
} = authSlice.actions;
export default authSlice.reducer;
