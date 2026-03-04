import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../store/redux/adminSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});

// These types are helpful for TypeScript later
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
