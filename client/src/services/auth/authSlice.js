import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions"; 
import { getCookie } from "../../utils";

const token = getCookie('SessionID') ? getCookie('SessionID') : null;

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  token, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.SessionID = payload.SessionID;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    // register user reducer...
  },
})

export default authSlice.reducer;