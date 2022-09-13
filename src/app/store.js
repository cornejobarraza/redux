import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/settings/settingsSlice";

const settingsMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type.startsWith("user/")) {
    const user = store.getState().settings;
    localStorage.setItem("user", JSON.stringify(user));
  }
  return result;
};

export const store = configureStore({
  reducer: {
    settings: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(settingsMiddleware),
});
