import React from "react";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "../../../hooks/store-hooks";
import { darkTheme, lightTheme } from "../../../theme/default-theme";
import { isDarkThemeAppStateSelector } from "../../../store/selectors/app-selectors";

interface AppThemeProviderProps {
  children: React.ReactNode;
}

const AppThemeProvider = (props: AppThemeProviderProps): JSX.Element => {
  const { children } = props;

  const appDarkTheme = useAppSelector(isDarkThemeAppStateSelector);

  return <ThemeProvider theme={appDarkTheme ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
