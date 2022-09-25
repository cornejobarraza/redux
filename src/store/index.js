import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user.slice";

import { history } from "helpers";

export * from "./user.slice";

const userMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Remove user state from localStorage
  if (action.type.match("user/reset")) {
    localStorage.removeItem("currentUser");
  }

  // Save user state in localStorage for every successful action
  if (action.type.endsWith("fulfilled")) {
    const user = store.getState().user;
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  // Backup previous local user when adding Google account
  if (action.type.startsWith("user/google/login/pending")) {
    const { user } = JSON.parse(localStorage.getItem("currentUser"));
    if (user) localStorage.setItem("previousUser", JSON.stringify(user));
  }

  // Restore saved local user when removing Google account
  if (action.type.startsWith("user/google/logout")) {
    const previousUser = JSON.parse(localStorage.getItem("previousUser"));
    if (previousUser) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const restoredUser = {
        ...currentUser,
        user: { name: previousUser.name, email: previousUser.email, avatar: previousUser.avatar },
      };
      localStorage.setItem("currentUser", JSON.stringify(restoredUser));
      localStorage.removeItem("previousUser");
      history.navigate(0);
    }
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
