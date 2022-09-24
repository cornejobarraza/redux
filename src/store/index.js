import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user.slice";

import { history } from "helpers";

export * from "./user.slice";

const userMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type.match("user/resetState")) {
    localStorage.removeItem("currentUser");
  }

  if (action.type.endsWith("fulfilled")) {
    const user = store.getState().user;
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  if (action.type.match("user/login/fulfilled") || action.type.match("user/logout/fulfilled")) {
    if (history.location.state) {
      // Get return URL from location state
      const { from } = history.location.state;
      history.navigate(from);
    }
  }

  return result;
};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userMiddleware),
});
