type colors = {
  textPrimary: string;

  mainBackground: string;

  navBackground: string;

  popupBackground: string;

  border: string;

  activeBlue: string;

  activeBlueHover: string;

  errorRed: string;

  acceptGreen: string;
};

type fontSize = {
  xs: string;

  sm: string;

  md: string;

  lg: string;

  xl: string;
};

type fonts = {
  inter: string;
};

interface ITheme {
  colors: colors;
  fonts: fonts;
  fontSize: fontSize;
}

export default ITheme;
