import ITheme from "./ITheme";

const lightTheme: ITheme = {
  colors: {
    textPrimary: "#111827",
    mainBackground: "#F9FAFB",
    navBackground: "#FFFFFF",
    popupBackground: "#FFFFFF",
    border: "#E5E7EB",
    activeBlue: "#276AEE",
    activeBlueHover: "#1C4698",
    errorRed: "#E44949",
    acceptGreen: "#37C61F",
  },
  fonts: {
    inter: "Inter",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
};

const darkTheme: ITheme = {
  colors: {
    textPrimary: "#D7D7D7",
    mainBackground: "#121212",
    navBackground: "#16161A",
    popupBackground: "#1B1B20",
    border: "#252525",
    activeBlue: "#276AEE",
    activeBlueHover: "#1C4698",
    errorRed: "#E44949",
    acceptGreen: "#37C61F",
  },
  fonts: {
    inter: "Inter",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
};

export { lightTheme, darkTheme };
