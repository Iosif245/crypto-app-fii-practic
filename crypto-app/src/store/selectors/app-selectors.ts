import { RootState } from "..";

export const isModalOpenAppStateSelector = (state: RootState): boolean => state.app.isAppModalOpen;
export const isDarkThemeAppStateSelector = (state: RootState): boolean => state.app.appDarkTheme;
