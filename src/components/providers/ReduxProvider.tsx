"use client";

import { Provider } from "react-redux";
import { store } from "../../lib/store/store"; // Adjust path to where your store is

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
