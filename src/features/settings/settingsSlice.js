import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeBackend } from "./settingsAPI";

const createInitialState = () => {
  const data = JSON.parse(localStorage.getItem("user"));
  return {
    isLoggedIn: data?.isLoggedIn || false,
    info: data?.info || { name: "John Doe", email: "john.doe@gmail.com", avatar: 34 },
    pending: {
      login: null,
      update: null,
      logout: null,
    },
    error: { login: null, update: null, logout: null },
  };
};

export const updateAsync = createAsyncThunk("user/update", async (user) => {
  const response = await fakeBackend(user);
  return response.data;
});

export const logInAsync = createAsyncThunk("user/login", async (user) => {
  const response = await fakeBackend(user);
  return response.data;
});

export const logOutAsync = createAsyncThunk("user/logout", async (user) => {
  const response = await fakeBackend(user);
  return response.data;
});

export const settingsSlice = createSlice({
  name: "settings",
  initialState: createInitialState(),
  reducers: {
    resetStatus: (state) => {
      state.pending = createInitialState().pending;
      state.error = createInitialState().error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateAsync.pending, (state) => {
        state.pending.update = true;
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.pending.update = false;
        state.info = action.payload;
      })
      .addCase(updateAsync.rejected, (state) => {
        state.pending.update = false;
        state.error.update = true;
      })
      .addCase(logInAsync.pending, (state) => {
        state.pending.login = true;
      })
      .addCase(logInAsync.fulfilled, (state, action) => {
        state.pending.login = false;
        state.isLoggedIn = true;
        state.info = action.payload.info;
      })
      .addCase(logInAsync.rejected, (state) => {
        state.pending.login = false;
        state.error.login = true;
      })
      .addCase(logOutAsync.pending, (state) => {
        state.pending.logout = true;
      })
      .addCase(logOutAsync.fulfilled, (state, action) => {
        state.pending.logout = false;
        state.isLoggedIn = action.payload.isLoggedIn;
      })
      .addCase(logOutAsync.rejected, (state) => {
        state.pending.logout = false;
        state.error.logout = true;
      });
  },
});

export const { resetStatus } = settingsSlice.actions;
export default settingsSlice.reducer;
