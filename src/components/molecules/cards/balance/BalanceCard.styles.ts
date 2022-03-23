import themeConstants from '@styles/theme/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginVertical: themeConstants.spacing.xs,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  amount: {
    justifyContent: 'center',
    marginTop: themeConstants.spacing.l,
  },
});

export default styles;
