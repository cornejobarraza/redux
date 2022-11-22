import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeBackend } from "utils";

export const userDefault = {
  avatar: "https://avatars.dicebear.com/api/adventurer-neutral/59.svg",
  name: "John Doe",
  email: "john.doe@email.com",
  address: "8929 Valwood Pkwy, Billings, MI 63104",
  website: "www.thejohndoe.com",
};

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
  let local;
  const data = localStorage.getItem("currentUser");
  if (data && data.startsWith("{") && data.endsWith("}")) local = JSON.parse(data);

  return {
    user: local?.user || userDefault,
    logged: local?.logged || false,
    pending: {
      login: null,
      update: null,
      logout: null,
      delete: null,
    },
    error: { login: null, update: null, logout: null, delete: null },
  };
}

function createReducers() {
  return {
    resetState,
    clearStatus,
    deleteGoogleStart,
    deleteGoogleSuccess,
    deleteGoogleError,
    loginGoogleStart,
    loginGoogleError,
  };

  function resetState(state) {
    state.user = userDefault;
    state.logged = null;
  }

  function clearStatus(state) {
    state.pending = { login: null, update: null, logout: null, delete: null };
    state.error = { login: null, update: null, logout: null, delete: null };
  }

  function loginGoogleStart(state) {
    state.error = { ...state, login: false };
    state.pending = { ...state, login: true };
  }

  function loginGoogleError(state) {
    state.pending = { ...state, login: false };
    state.error = { ...state, login: true };
  }

  function deleteGoogleStart(state) {
    state.error = { ...state, delete: false };
    state.pending = { ...state, delete: true };
  }

  function deleteGoogleSuccess(state) {
    state.pending = { ...state, delete: false };
  }

  function deleteGoogleError(state) {
    state.pending = { ...state, delete: false };
    state.error = { ...state, delete: true };
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
    return createAsyncThunk(`${name}/login`, async (user) => {
      const response = await fakeBackend(user);
      return response.data;
    });
  }

  function logOutAsync() {
    return createAsyncThunk(`${name}/logout`, async (user) => {
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
        state.user = action.payload;
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
      [fulfilled]: (state, action) => {
        state.pending.login = false;
        state.logged = true;
        state.user = action.payload;
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
        state.logged = false;
      },
      [rejected]: (state) => {
        state.pending.logout = false;
        state.error.logout = true;
      },
    };
  }
}
