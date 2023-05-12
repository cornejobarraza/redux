import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeBackend } from "utils";
import userDefault from "data/user.json";

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
    logged: local?.logged || { gAuth: false, status: false },
    pending: {
      login: null,
      update: null,
      logout: null,
      delete: null,
    },
    error: { login: null, update: null, logout: null, delete: null, wishlist: null },
  };
}

function createReducers() {
  return {
    resetState,
    clearStatus,
    deleteGoogleStart,
    deleteGoogleError,
    loginGoogleStart,
    loginGoogleSuccess,
    loginGoogleError,
    setWishlistError,
    logoutGoogleStart,
    logoutGoogleError,
  };

  function resetState(state) {
    state.user = userDefault;
    state.logged = { gAuth: false, status: false };
  }

  function clearStatus(state) {
    state.pending = { login: null, update: null, logout: null, delete: null };
    state.error = { login: null, update: null, logout: null, delete: null };
  }

  function loginGoogleStart(state) {
    state.error = { ...state.error, login: false };
    state.pending = { ...state.pending, login: true };
  }

  function loginGoogleSuccess(state) {
    state.logged = { ...state.logged, gAuth: true };
  }

  function loginGoogleError(state) {
    state.pending = { ...state.pending, login: false };
    state.error = { ...state.error, login: true };
  }

  function setWishlistError(state) {
    state.error = { ...state.error, wishlist: true };
  }

  function logoutGoogleStart(state) {
    state.error = { ...state.error, logout: false };
    state.pending = { ...state.pending, logout: true };
  }

  function logoutGoogleError(state) {
    state.pending = { ...state.pending, logout: false };
    state.error = { ...state.error, logout: true };
  }

  function deleteGoogleStart(state) {
    state.error = { ...state.error, delete: false };
    state.pending = { ...state.pending, delete: true };
  }

  function deleteGoogleError(state) {
    state.pending = { ...state.pending, delete: false };
    state.error = { ...state.error, delete: true };
  }
}

function createExtraActions() {
  return {
    updateAsync: updateAsync(),
    logInAsync: logInAsync(),
    logOutAsync: logOutAsync(),
    setWishlistAsync: setWishlistAsync(),
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

  function setWishlistAsync() {
    return createAsyncThunk(`${name}/wishlist`, (user) => {
      return user;
    });
  }
}

function createExtraReducers() {
  return {
    ...updateAsync(),
    ...logInAsync(),
    ...logOutAsync(),
    ...setWishlistAsync(),
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
        state.logged = { ...state.logged, status: true };
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
        state.logged = { ...state.logged, status: false };
      },
      [rejected]: (state) => {
        state.pending.logout = false;
        state.error.logout = true;
      },
    };
  }

  function setWishlistAsync() {
    const { fulfilled } = extraActions.setWishlistAsync;
    return {
      [fulfilled]: (state, action) => {
        state.user.wishlist = action.payload;
      },
    };
  }
}
