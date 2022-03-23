import {
  CreditCardIcon,
  DonateIcon,
  ReceiveMoneyIcon,
  SavingIcon,
  WalletIcon,
} from '@assets/icons';
import { Circle, Icon } from '@components/atoms';
import themeConstants from '@styles/theme/constants';
import { ThemeContext } from '@styles/theme/context';
import React, { useContext } from 'react';
import { View } from 'react-native';
import styles from './ColoredCircleIcon.styles';
import type { Props } from './ColoredCircleIcon.types';

const getIcon = {
  income: SavingIcon,
  expense: CreditCardIcon,
  receive: ReceiveMoneyIcon,
  debt: DonateIcon,
  wallet: WalletIcon,
};

function ColoredCircleIcon({
  icon,
  circleColor,
  circleSize,
  iconColor,
  iconSize,
  variant,
}: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { marginRight: variant === 'left' ? themeConstants.spacing.s : 0 },
      ]}>
      <Circle
        height={circleSize || 40}
        width={circleSize || 40}
        style={
          variant === 'right'
            ? styles.circleRight
            : styles.circleLeft || styles.circleLeft
        }
        color={circleColor}
      />
      <Icon
        svg={getIcon[icon]}
        fill={iconColor || theme.colors.cardIcon}
        height={iconSize || 40}
        width={iconSize || 40}
      />
    </View>
  );
}

export default ColoredCircleIcon;
