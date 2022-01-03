import React, { memo, useContext } from "react";
import { StyleSheet, View } from "react-native";

import { Card } from "@components/atoms/card";
import { Text } from "@components/atoms/typography";
import Icon from "@components/atoms/Icon";

import { ThemeContext } from "@styles/theme/context";

import { WalletIcon } from "@assets/icons";

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
        <Icon
          svg={WalletIcon}
          fill={theme.colors.cardText}
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
          color={theme.colors.cardText}
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
  },
  amount: {
    justifyContent: "center",
  },
});

export default memo(AmountCard);
