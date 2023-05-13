import { configureStore } from "@reduxjs/toolkit";
import isEqual from "lodash.isequal";
import isPlainObject from "lodash.isplainobject";

import { userReducer } from "./user.slice";
import defaultUser from "data/user.json";

import { history } from "utils";

export * from "./user.slice";

const userMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Enable history redirect after log in
  if (action.type.match("user/login/fulfilled")) {
    history.redirect = true;
  }

  // Disable history redirect after log out
  if (action.type.match("user/logout/fulfilled") || action.type.match("user/deleteGoogleStart")) {
    history.redirect = false;
  }

  // Copy local user after Google log in starts
  if (action.type.match("user/loginGoogleStart")) {
    let current;
    const state = store.getState().auth;
    const data = localStorage.getItem("currentUser");
    if (isPlainObject(JSON.parse(data))) current = JSON.parse(data);

    if (current && !isEqual(current.user, defaultUser)) {
      const pastUser = { user: state.user };
      localStorage.setItem("pastUser", JSON.stringify(pastUser));
    }
  }

  // Remove user from localStorage after resetting state
  if (action.type.match("user/reset")) {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("pastUser");
  }

  // Update user in localStorage after every successful action
  if (action.type.endsWith("fulfilled")) {
    const state = store.getState().auth;
    const currentUser = { user: state.user, logged: state.logged };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }

  return result;
};

export const store = configureStore({
  reducer: {
    auth: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userMiddleware),
});
