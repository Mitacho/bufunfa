import type { Palette, Theme } from "./types";

const palette: Palette = {
  white: "#171717",
  black: "#E8EAED",
  blue: "#A4DCC5",
  beige: "#E0CDAA",
  purple: "#C3B3E7",
  green: "#A6D4A6",
  orange: "#DAB7A4",
  red: "#d17777",
  grayPrimary: "#BDC1C6",
  graySecondary: "#949494",
  purplePrimary: "#C3B3E7",
};

const dark: Theme = {
  title: "dark",
  colors: {
    statusBar: "#171717",
    statusBarContent: "light-content",
    background: palette.white,
    blue: palette.blue,
    beige: palette.beige,
    purple: palette.purple,
    green: palette.green,
    orange: palette.orange,
    red: palette.red,
    text: palette.black,
    cardText: palette.white,
    grayPrimary: palette.grayPrimary,
    graySecondary: palette.graySecondary,
    buttonPrimary: palette.purplePrimary,
    buttonSecondary: palette.purplePrimary,
    buttonTertiary: palette.purplePrimary,
  },
  spacing: {
    xs: 8,
    s: 16,
    m: 20,
    l: 24,
    xl: 40,
  },
  fontSize: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
};

export default dark;
