import React, { memo, useContext } from "react";
import { StyleSheet, View } from "react-native";

import { Card } from "@components/atoms/card";
import { Text } from "@components/atoms/typography";

import { ThemeContext } from "@styles/theme/context";

import { ColoredCircleIcon } from "@components/molecules";

type Props = {
  amount: number;
};

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

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  amount: {
    justifyContent: "center",
  },
});

export default memo(AmountCard);
