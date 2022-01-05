import React, { memo, useContext } from "react";
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
import Circle from "@components/atoms/Circle";

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

const CIRCLE_COLOR_OPACITY = "40";

function AmountCard({ amount, title, type }: Props) {
  const { theme } = useContext(ThemeContext);

  const getColor = {
    income: theme.colors.cardIncome,
    expense: theme.colors.cardExpense,
    receive: theme.colors.cardToReceive,
    debt: theme.colors.cardDebt,
  };

  const getCircleColor = {
    income: theme.colors.beige + CIRCLE_COLOR_OPACITY,
    expense: theme.colors.purple + CIRCLE_COLOR_OPACITY,
    receive: theme.colors.green + CIRCLE_COLOR_OPACITY,
    debt: theme.colors.orange + CIRCLE_COLOR_OPACITY,
  };

  return (
    <Card
      color={getColor[type]}
      style={{ flexDirection: "row", marginVertical: theme.spacing.xs }}>
      <View style={[styles.cardHeader, { marginRight: theme.spacing.s }]}>
        <Circle
          height={36}
          width={36}
          style={styles.circle}
          color={getCircleColor[type]}
        />
        <Icon
          svg={getIcon[type]}
          fill={theme.colors.cardIcon}
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
    flex: 1,
  },
  circle: {
    position: "absolute",
    left: -6,
  },
});

export default memo(AmountCard);
