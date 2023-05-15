import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    loggedIn: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.loggedIn = true;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutSuccess: (state, action) => {
      state.currentUser = null;
      localStorage.removeItem("token");
      state.loggedIn = false;
    },
    registerPending: (state, action) => {
      state.isFetching = true
    },
    registerFulfilled: (state, action) => {
      state.isFetching = false
      state.loggedIn = true
      state.currentUser = action.payload
    },
    registerRejected: (state, action) => {
      state.isFetching = false
      state.error = true
      state.loggedIn = false
      state.currentUser = null
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, registerPending, registerFulfilled, registerRejected, logoutSuccess } = userSlice.actions;
export const selectUser = (state) => state.user.currentUser;
export default userSlice.reducer;