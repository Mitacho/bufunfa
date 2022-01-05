import React, { memo, useContext } from "react";
import { StyleSheet, View } from "react-native";

import { Card } from "@components/atoms/card";
import { Text } from "@components/atoms/typography";
import Circle from "@components/atoms/Circle";

import Icon from "@components/atoms/Icon";

import { ThemeContext } from "@styles/theme/context";

import { WalletIcon } from "@assets/icons";

type Props = {
  amount: number;
};

const CIRCLE_COLOR_OPACITY = "aa";

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
        <Circle
          height={40}
          width={40}
          style={styles.circle}
          color={theme.colors.blue + CIRCLE_COLOR_OPACITY}
        />
        <Icon
          svg={WalletIcon}
          fill={theme.colors.cardIcon}
          height={40}
          width={40}
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
          text={Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
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
  circle: {
    position: "absolute",
    right: 10,
  },
});

export default memo(AmountCard);
