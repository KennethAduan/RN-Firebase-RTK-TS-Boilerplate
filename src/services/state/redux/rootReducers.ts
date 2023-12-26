// store/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
const rootReducers = combineReducers({
  // Add your slice reducers here
  user: userSlice,
});

export default rootReducers;
