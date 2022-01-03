import type { Palette, Theme } from "./types";

const palette: Palette = {
  white: "#ffffff",
  black: "#050505",
  blue: "#d1fbea",
  beige: "#fcedd2",
  purple: "#e2d5fe",
  green: "#cff4cf",
  orange: "#f3dacc",
  red: "#d17777",
  grayPrimary: "#BDC1C6",
  graySecondary: "#949494",
  purplePrimary: "#E2D5FE",
};

const light: Theme = {
  title: "light",
  colors: {
    statusBar: "#ffffff",
    statusBarContent: "dark-content",
    background: palette.white,
    blue: palette.blue,
    beige: palette.beige,
    purple: palette.purple,
    green: palette.green,
    orange: palette.orange,
    red: palette.red,
    text: palette.black,
    cardText: palette.black,
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

export default light;
