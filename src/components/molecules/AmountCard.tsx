import React, { memo, useContext } from "react";
import { StyleSheet, View } from "react-native";

import { Card } from "@components/atoms/card";
import { Text } from "@components/atoms/typography";
import Icon from "@components/atoms/Icon";
import { ColoredCircleIcon } from "@components/molecules";

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

const CIRCLE_COLOR_OPACITY = "aa";

function AmountCard({ amount, title, type }: Props) {
  const { theme } = useContext(ThemeContext);

  const getColor = {
    income: theme.colors.cardIncome,
    expense: theme.colors.cardExpense,
    receive: theme.colors.cardToReceive,
    debt: theme.colors.cardDebt,
  };

  const getCircleColor = {
    income: theme.colors.beige,
    expense: theme.colors.purple,
    receive: theme.colors.green,
    debt: theme.colors.orange,
  };

  return (
    <Card
      color={getColor[type]}
      style={{ flexDirection: "row", marginVertical: theme.spacing.xs }}>
      <View style={[styles.cardHeader, { marginRight: theme.spacing.s }]}>
        <ColoredCircleIcon
          icon={type}
          circleSize={36}
          circleColor={getCircleColor[type] + CIRCLE_COLOR_OPACITY}
        />
      </View>
      <View style={[styles.amount]}>
        <Text text={title} fontSize="m" color={theme.colors.cardText} />
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
    flex: 1,
  },
  circle: {
    position: "absolute",
    left: -6,
  },
});

export default memo(AmountCard);
