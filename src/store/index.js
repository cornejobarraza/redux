import { configureStore } from "@reduxjs/toolkit";
import isEqual from "lodash.isequal";
import isPlainObject from "lodash.isplainobject";

import { userReducer } from "./user.slice";
import defaultUser from "data/user.json";

export * from "./user.slice";

const userMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Copy local user after Google log in starts
  if (action.type.match("user/loginGoogleSuccess")) {
    const state = store.getState().auth;

    let current;
    let past;

    const currentItem = localStorage.getItem("currentUser");
    const pastItem = localStorage.getItem("pastUser");

    if (isPlainObject(JSON.parse(currentItem))) current = JSON.parse(currentItem);
    if (isPlainObject(JSON.parse(pastItem))) past = JSON.parse(pastItem);

    if (!past && !isEqual(current?.user, defaultUser)) {
      const pastUser = { user: state.user };

      localStorage.setItem("pastUser", JSON.stringify(pastUser));
    }
  }

  // Remove user from localStorage after resetting state
  if (action.type.match("user/reset")) {
    localStorage.setItem("currentUser", localStorage.getItem("pastUser"));
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
