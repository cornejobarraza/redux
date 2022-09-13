import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeBackend } from "./settingsAPI";

const createInitialState = () => {
  const data = JSON.parse(localStorage.getItem("user"));
  return {
    edited: false,
    isLoggedIn: data?.isLoggedIn || false,
    info: data?.info || { name: "John Doe", email: "john.doe@gmail.com", avatar: 59 },
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
    resetEdit: (state) => {
      state.edited = false;
    },
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
        state.edited = true;
      })
      .addCase(updateAsync.rejected, (state) => {
        state.pending.update = false;
        state.error.update = true;
      })
      .addCase(logInAsync.pending, (state) => {
        state.pending.login = true;
      })
      .addCase(logInAsync.fulfilled, (state) => {
        state.pending.login = false;
        state.isLoggedIn = true;
      })
      .addCase(logInAsync.rejected, (state) => {
        state.pending.login = false;
        state.error.login = true;
      })
      .addCase(logOutAsync.pending, (state) => {
        state.pending.logout = true;
      })
      .addCase(logOutAsync.fulfilled, (state) => {
        state.pending.logout = false;
        state.isLoggedIn = false;
      })
      .addCase(logOutAsync.rejected, (state) => {
        state.pending.logout = false;
        state.error.logout = true;
      });
  },
});

export const { resetEdit, resetStatus } = settingsSlice.actions;
export default settingsSlice.reducer;
