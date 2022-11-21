import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user.slice";

import { history } from "utils";

export * from "./user.slice";

const userMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Remove user from localStorage after resetting state
  if (action.type.match("user/reset")) {
    localStorage.removeItem("currentUser");
  }

  // Update user in localStorage after every successful action
  if (action.type.endsWith("fulfilled")) {
    const state = store.getState().user;
    const currentUser = { user: state.user, logged: state.logged };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
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
