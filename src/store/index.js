import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user.slice";

export * from "./user.slice";

const userMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Remove user from localStorage after resetting state
  if (action.type.match("user/reset")) {
    localStorage.removeItem("currentUser");
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
