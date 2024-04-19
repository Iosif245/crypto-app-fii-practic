import { createAction } from "@reduxjs/toolkit";
import { APP__SET_MODAL_OPEN, APP__SET_DARK_THEME } from "../constants";

export const setAppIsModalOpenAction = createAction<boolean>(APP__SET_MODAL_OPEN);
export const setAppDarkThemeAction = createAction<boolean>(APP__SET_DARK_THEME);
