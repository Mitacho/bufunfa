import { Card, Text } from '@components/atoms';
import { ColoredCircleIcon } from '@components/molecules';
import { ThemeContext } from '@styles/theme/context';
import React, { memo, useContext } from 'react';
import { View } from 'react-native';
import styles from './BalanceCard.styles';
import type { Props } from './BalanceCard.types';

function AmountCard({ amount }: Props) {
  const { theme } = useContext(ThemeContext);
  return (
    <Card style={[styles.card]}>
      <View style={[styles.cardHeader]}>
        <Text
          text="Saldo na sua carteira"
          fontSize="m"
          color={theme.colors.cardText}
        />
        <ColoredCircleIcon
          icon="wallet"
          circleColor={theme.colors.blue + 'aa'}
          variant="right"
        />
      </View>
      <View style={[styles.amount]}>
        <Text
          text={amount}
          currency
          weight="medium"
          fontSize="l"
          color={theme.colors.cardAmount}
          numberOfLines={1}
        />
      </View>
    </Card>
  );
}

export default memo(AmountCard);
