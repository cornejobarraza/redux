import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import isPlainObject from "lodash.isplainobject";

import { getCurrentTimestamp, fakeBackend } from "utils";
import defaultUser from "data/user.json";

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
  if (isPlainObject(JSON.parse(data))) local = JSON.parse(data);

  return {
    user: local?.user || defaultUser,
    logged: local?.logged || { status: false, gAuth: false, timestamp: undefined },
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
    resetUser,
    deleteGoogleStart,
    deleteGoogleSuccess,
    deleteGoogleError,
    loginGoogleStart,
    loginGoogleSuccess,
    loginGoogleError,
    logoutGoogleStart,
    logoutGoogleSuccess,
    logoutGoogleError,
    setWishlistError,
  };

  function resetUser(state) {
    let past;
    const data = localStorage.getItem("pastUser");
    if (isPlainObject(JSON.parse(data))) past = JSON.parse(data);

    state.user = past?.user || defaultUser;
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

  function logoutGoogleStart(state) {
    state.error = { ...state.error, logout: false };
    state.pending = { ...state.pending, logout: true };
  }

  function logoutGoogleSuccess(state) {
    state.pending = { ...state.pending, logout: false };
    state.logged = { status: false, gAuth: false };
  }

  function logoutGoogleError(state) {
    state.pending = { ...state.pending, logout: false };
    state.error = { ...state.error, logout: true };
  }

  function deleteGoogleStart(state) {
    state.error = { ...state.error, delete: false };
    state.pending = { ...state.pending, delete: true };
  }

  function deleteGoogleSuccess(state) {
    state.pending = { ...state.pending, delete: false };
    state.logged = { status: false, gAuth: false };
  }

  function deleteGoogleError(state) {
    state.pending = { ...state.pending, delete: false };
    state.error = { ...state.error, delete: true };
  }

  function setWishlistError(state) {
    state.error = { ...state.error, wishlist: true };
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
        state.logged = { ...state.logged, status: true, timestamp: getCurrentTimestamp() };
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
    const { fulfilled, rejected } = extraActions.setWishlistAsync;
    return {
      [fulfilled]: (state, action) => {
        state.user.wishlist = action.payload;
      },
      [rejected]: (state) => {
        state.error.wishlist = true;
      },
    };
  }
}
