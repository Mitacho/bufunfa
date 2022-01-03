import type { StatusBarStyle } from "react-native";

export type Palette = {
  [key: string]: string;
};

export type Spacing = {
  s: number;
  m: number;
  l: number;
  xl: number;
};

export type FontSize = {
  s: number;
  m: number;
  l: number;
  xl: number;
};

export type Colors = {
  statusBar: string;
  statusBarContent: StatusBarStyle | null | undefined;
  background: string;
  blue: string;
  beige: string;
  purple: string;
  green: string;
  orange: string;
  red: string;
  text: string;
  cardText: string;
  grayPrimary: string;
  graySecondary: string;
  buttonPrimary: string;
  buttonSecondary: string;
  buttonTertiary: string;
};

export type Theme = {
  title: "light" | "dark";
  colors: Colors;
  spacing: Spacing;
  fontSize: FontSize;
};
