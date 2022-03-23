import type { StatusBarStyle } from 'react-native';

export type Palette = {
  [key: string]: string;
};

export type Colors = {
  statusBar: string;
  statusBarContent: StatusBarStyle | null | undefined;
  background: string;
  blue: string;
  input: string;
  beige: string;
  purple: string;
  green: string;
  orange: string;
  red: string;
  text: string;
  textInput: string;
  textSecondary: string;
  label: string;
  placeholder: string;
  cardText: string;
  cardAmount: string;
  cardIcon: string;
  cardBalance: string;
  cardIncome: string;
  cardExpense: string;
  cardToReceive: string;
  cardDebt: string;
  grayPrimary: string;
  graySecondary: string;
  buttonPrimary: string;
  buttonSecondary: string;
  buttonTertiary: string;
};

export type Theme = {
  title: 'light' | 'dark';
  colors: Colors;
};
