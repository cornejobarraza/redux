import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user.slice";

import { history } from "helpers";

export * from "./user.slice";

const userMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (
    action.type.startsWith("user/update") ||
    action.type.startsWith("user/login") ||
    action.type.startsWith("user/logout")
  ) {
    const user = store.getState().user;
    localStorage.setItem("currentUser", JSON.stringify(user));
  }
  if (action.type.match("user/login/fulfilled") || action.type.match("user/logout/fulfilled")) {
    // Get return url from location state or default to home page
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
