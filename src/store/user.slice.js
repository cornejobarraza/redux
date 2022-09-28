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
  const data = JSON.parse(localStorage.getItem("currentUser"));
  return {
    user: data?.user,
    logged: data?.logged,
    pending: {
      login: null,
      update: null,
      logout: null,
    },
    error: { login: null, update: null, logout: null },
  };
}

function createReducers() {
  return {
    reset,
    clear,
  };

  function reset(state) {
    state.user = null;
    state.logged = null;
  }

  function clear(state) {
    state.pending = { login: null, update: null, logout: null };
    state.error = { login: null, update: null, logout: null };
  }
}

function createExtraActions() {
  return {
    updateGoogleAsync: updateGoogleAsync(),
    updateAsync: updateAsync(),
    logInGoogleAsync: logInGoogleAsync(),
    logInAsync: logInAsync(),
    logOutGoogleAsync: logOutGoogleAsync(),
    logOutAsync: logOutAsync(),
  };

  function updateGoogleAsync() {
    return createAsyncThunk(`${name}/google/update`, async (user) => {
      const response = await fakeBackend(user);
      return response.data;
    });
  }

  function updateAsync() {
    return createAsyncThunk(`${name}/update`, async (user) => {
      const response = await fakeBackend(user);
      return response.data;
    });
  }

  function logInGoogleAsync() {
    return createAsyncThunk(`${name}/google/login`, async (user) => {
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

  function logOutGoogleAsync() {
    return createAsyncThunk(`${name}/google/logout`, async (user) => {
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
    ...updateGoogleAsync(),
    ...updateAsync(),
    ...logInGoogleAsync(),
    ...logInAsync(),
    ...logOutGoogleAsync(),
    ...logOutAsync(),
  };

  function updateGoogleAsync() {
    const { pending, fulfilled, rejected } = extraActions.updateGoogleAsync;
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

  function logInGoogleAsync() {
    const { pending, fulfilled, rejected } = extraActions.logInGoogleAsync;
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

  function logOutGoogleAsync() {
    const { pending, fulfilled, rejected } = extraActions.logOutGoogleAsync;
    return {
      [pending]: (state) => {
        state.pending.logout = true;
      },
      [fulfilled]: (state, action) => {
        state.pending.logout = false;
        state.logged = false;
        state.user = action.payload;
      },
      [rejected]: (state) => {
        state.pending.logout = false;
        state.error.logout = true;
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
