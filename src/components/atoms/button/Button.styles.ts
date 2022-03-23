import themeConstants from '@styles/theme/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: themeConstants.fontSize.m,
  },
  button: {
    width: '100%',
    borderRadius: themeConstants.borderRadius.s,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashedButton: {
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  transparentButton: {
    backgroundColor: 'none',
    borderWidth: 0,
  },
});
