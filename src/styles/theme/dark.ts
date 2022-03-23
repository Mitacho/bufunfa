import type { Palette, Theme } from './types';

const palette: Palette = {
  white: '#171717',
  whiteSecondary: '#E8EAED',
  black: '#E8EAED',
  blackSecondary: '#202124',
  blue: '#86AAA3',
  beige: '#938A7A',
  purple: '#5D566D',
  green: '#667D66',
  orange: '#735A4D',
  red: '#d17777',
  grayPrimary: '#BDC1C6',
  graySecondary: '#949494',
  grayTertiary: '#5f6368',
  purplePrimary: '#C3B3E7',
};

const dark: Theme = {
  title: 'dark',
  colors: {
    statusBar: '#171717',
    statusBarContent: 'light-content',
    background: palette.white,
    blue: palette.blue,
    beige: palette.beige,
    purple: palette.purple,
    green: palette.green,
    orange: palette.orange,
    red: palette.red,
    text: palette.black,
    textInput: palette.black,
    textSecondary: palette.grayPrimary,
    placeholder: palette.grayTertiary,
    label: palette.grayPrimary,
    input: palette.blackSecondary,
    cardText: palette.grayPrimary,
    cardIcon: palette.grayPrimary,
    cardAmount: palette.whiteSecondary,
    cardBalance: palette.blackSecondary,
    cardIncome: palette.blackSecondary,
    cardExpense: palette.blackSecondary,
    cardToReceive: palette.blackSecondary,
    cardDebt: palette.blackSecondary,
    grayPrimary: palette.grayPrimary,
    graySecondary: palette.graySecondary,
    buttonPrimary: palette.purplePrimary,
    buttonSecondary: palette.purplePrimary,
    buttonTertiary: palette.purplePrimary,
  },
};

export default dark;
