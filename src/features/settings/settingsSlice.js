import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./settingsAPI";

const initialState = {
  info: {
    name: "John Doe",
    email: "john.doe@gmail.com",
    avatar: "34",
  },
  pending: null,
  error: null,
};

export const updateAsync = createAsyncThunk("user/update", async (user) => {
  const response = await fetchUser(user);
  return response.data;
});

export const settingsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => void (state.info = initialState.info),
    logout: (state) => void (state.info = {}),
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateAsync.pending, (state) => {
        state.pending = true;
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.pending = false;
        state.info = action.payload;
      })
      .addCase(updateAsync.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const { login, logout } = settingsSlice.actions;
export default settingsSlice.reducer;
