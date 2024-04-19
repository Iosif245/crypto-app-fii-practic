import { createReducer } from "@reduxjs/toolkit";
import { setLoadingUserAction, setUsersUserAction, setUserUserAction } from "../actions/user-actions";

interface IUserState {
  user: IUser | null;
  users: IUsers | [];
  loading: boolean;
}

const initialState: IUserState = {
  user: null,
  users: [],
  loading: false,
};

const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setLoadingUserAction, (state, action) => ({ ...state, loading: action.payload }))
    .addCase(setUsersUserAction, (state, action) => ({ ...state, users: action.payload }))
    .addCase(setUserUserAction, (state, action) => ({ ...state, user: action.payload }))
);

export default userReducer;
