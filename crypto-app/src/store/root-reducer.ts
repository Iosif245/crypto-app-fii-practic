import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./reducers/app-reduecer";
import userReducer from "./reducers/user-reducer";
import coinReducer from "./reducers/coin-reducer";

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  coin: coinReducer,
});

export default rootReducer;
