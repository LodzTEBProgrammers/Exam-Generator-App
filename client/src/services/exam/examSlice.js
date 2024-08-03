import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  tasks: null,
  error: null,
  success: false,
};
// elementy stanu takie jak loadning, error, success zostana uzyte pozniej
const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.tasks = payload;
    }
  }
});

export const { setCredentials } = examSlice.actions;

export default examSlice.reducer;
