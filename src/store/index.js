import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user.slice";

import { history } from "helpers";

export * from "./user.slice";

const userMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Remove user from localStorage after resetting state
  if (action.type.match("user/reset")) {
    localStorage.removeItem("currentUser");
  }

  // Update user in localStorage after every successful action
  if (action.type.endsWith("fulfilled")) {
    const user = store.getState().user;
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  // Backup previous user when adding Google account
  if (action.type.startsWith("user/google/login/pending")) {
    const data = JSON.parse(localStorage.getItem("currentUser"));
    if (data) {
      localStorage.setItem("previousUser", JSON.stringify(data.user));
    }
  }

  // Remove previous user after Google account is logged out
  if (action.type.match("user/google/logout/fulfilled")) {
    localStorage.removeItem("previousUser");
  }

  // Return to previous page or default to home page after login
  if (action.type.endsWith("login/fulfilled")) {
    const { from } = history.location.state || { from: { pathname: "/" } };
    history.navigate(from);
  }

  return result;
};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userMiddleware),
});
