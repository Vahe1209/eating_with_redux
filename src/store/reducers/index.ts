import { combineReducers } from "redux";
import { userReducer } from "./userListReducer";

export const rootReducer = combineReducers({
  userList: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
