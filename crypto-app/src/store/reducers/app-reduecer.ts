import { createReducer } from "@reduxjs/toolkit";
import { setAppIsModalOpenAction, setAppDarkThemeAction } from "../actions/app-sync-actions";

interface IAppState {
  isAppModalOpen: boolean;
  appDarkTheme: boolean;
}

const initialState = {
  isAppModalOpen: false,
  appDarkTheme: false,
};

const appReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setAppIsModalOpenAction, (state, action) => ({ ...state, isAppModalOpen: action.payload }))
    .addCase(setAppDarkThemeAction, (state, action) => ({ ...state, appDarkTheme: action.payload }))
);

export default appReducer;
