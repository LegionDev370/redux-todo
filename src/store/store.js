import { configureStore } from "@reduxjs/toolkit";
import Adder from "../components/TaskArray/Adder";
export const store = configureStore({
  reducer: {
    Adder,
  },
});
