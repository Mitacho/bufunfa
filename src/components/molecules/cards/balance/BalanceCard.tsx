import React, { memo, useContext } from "react";
import { View } from "react-native";

import { Card, Text } from "@components/atoms";

import { ThemeContext } from "@styles/theme/context";

import { ColoredCircleIcon } from "@components/molecules";

import styles from "./BalanceCard.styles";

import type { Props } from "./BalanceCard.types";

function AmountCard({ amount }: Props) {
  const { theme } = useContext(ThemeContext);
  return (
    <Card style={{ marginVertical: theme.spacing.xs }}>
      <View style={[styles.cardHeader]}>
        <Text
          text="Saldo na sua carteira"
          fontSize="m"
          color={theme.colors.cardText}
        />
        <ColoredCircleIcon
          icon="wallet"
          circleColor={theme.colors.blue + "aa"}
          variant="right"
        />
      </View>
      <View
        style={[
          styles.amount,
          {
            marginTop: theme.spacing.l,
          },
        ]}>
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
