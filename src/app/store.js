import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
