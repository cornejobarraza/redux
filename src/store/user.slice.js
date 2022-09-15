import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeBackend } from "helpers";

// Create slice
const name = "user";
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

// Exports
export const userActions = { ...slice.actions, ...extraActions };
export const userReducer = slice.reducer;

// Implementation
function createInitialState() {
  const data = JSON.parse(localStorage.getItem("user"));
  return {
    edited: data?.edited || false,
    isLoggedIn: data?.isLoggedIn || false,
    info: data?.info || { name: "John Doe", email: "john.doe@gmail.com", avatar: 59 },
    pending: data?.pending || {
      login: null,
      update: null,
      logout: null,
    },
    error: data?.error || { login: null, update: null, logout: null },
  };
}

function createReducers() {
  return {
    resetStatus,
  };

  function resetStatus(state) {
    state.pending = { login: null, update: null, logout: null };
    state.error = { login: null, update: null, logout: null };
  }
}

function createExtraActions() {
  return {
    updateAsync: updateAsync(),
    logInAsync: logInAsync(),
    logOutAsync: logOutAsync(),
  };

  function updateAsync() {
    return createAsyncThunk(`${name}/update`, async (user) => {
      const response = await fakeBackend(user);
      return response.data;
    });
  }

  function logInAsync() {
    return createAsyncThunk("user/login", async (user) => {
      const response = await fakeBackend(user);
      return response.data;
    });
  }

  function logOutAsync() {
    return createAsyncThunk("user/logout", async (user) => {
      const response = await fakeBackend(user);
      return response.data;
    });
  }
}

function createExtraReducers() {
  return {
    ...updateAsync(),
    ...logInAsync(),
    ...logOutAsync(),
  };

  function updateAsync() {
    const { pending, fulfilled, rejected } = extraActions.updateAsync;
    return {
      [pending]: (state) => {
        state.pending.update = true;
      },
      [fulfilled]: (state, action) => {
        state.pending.update = false;
        state.info = action.payload;
        state.edited = true;
      },
      [rejected]: (state) => {
        state.pending.update = false;
        state.error.update = true;
      },
    };
  }

  function logInAsync() {
    const { pending, fulfilled, rejected } = extraActions.logInAsync;
    return {
      [pending]: (state) => {
        state.pending.login = true;
      },
      [fulfilled]: (state) => {
        state.pending.login = false;
        state.isLoggedIn = true;
      },
      [rejected]: (state) => {
        state.pending.login = false;
        state.error.login = true;
      },
    };
  }

  function logOutAsync() {
    const { pending, fulfilled, rejected } = extraActions.logOutAsync;
    return {
      [pending]: (state) => {
        state.pending.logout = true;
      },
      [fulfilled]: (state) => {
        state.pending.logout = false;
        state.isLoggedIn = false;
      },
      [rejected]: (state) => {
        state.pending.logout = false;
        state.error.logout = true;
      },
    };
  }
}
