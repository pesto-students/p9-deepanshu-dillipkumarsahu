import { combineReducers } from "@reduxjs/toolkit";
import lightReducer from "./slices/light";
import stepCounterReducer from "./slices/setpCounter";

/* SET BLACKLIST */
export const blacklist = [];

/* combine reducers */
export const slices = combineReducers({
  lightReducer,
  stepCounterReducer,
});
