import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../../Features/Car/CarSlice";

export const store = configureStore({
  reducer: {
    car: carReducer
  },
})