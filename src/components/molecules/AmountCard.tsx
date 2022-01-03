import React, { memo, useContext, useMemo } from "react";
import { StyleSheet, View } from "react-native";

import { Card } from "@components/atoms/card";
import { Text } from "@components/atoms/typography";
import Icon from "@components/atoms/Icon";

import { ThemeContext } from "@styles/theme/context";

import {
  DonateIcon,
  ReceiveMoneyIcon,
  CreditCardIcon,
  SavingIcon,
} from "@assets/icons";

type CardType = "income" | "expense" | "receive" | "debt";

type Props = {
  type: CardType;
  title: string;
  amount: number;
};

const getIcon = {
  income: SavingIcon,
  expense: CreditCardIcon,
  receive: ReceiveMoneyIcon,
  debt: DonateIcon,
};

function AmountCard({ amount, title, type }: Props) {
  const { theme } = useContext(ThemeContext);

  const memoizedGetColor = useMemo(
    () => ({
      income: theme.colors.beige,
      expense: theme.colors.purple,
      receive: theme.colors.green,
      debt: theme.colors.orange,
    }),
    [],
  );

  return (
    <Card
      color={memoizedGetColor[type]}
      style={{ flexDirection: "row", marginVertical: theme.spacing.xs }}>
      <View style={[styles.cardHeader, { marginRight: theme.spacing.s }]}>
        <Icon
          svg={getIcon[type]}
          fill={theme.colors.cardText}
          height={40}
          width={40}
        />
      </View>
      <View style={[styles.amount]}>
        <Text text={title} fontSize="m" color={theme.colors.cardText} />
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
    flex: 1,
  },
});

export default memo(AmountCard);
