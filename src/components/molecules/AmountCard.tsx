import React, { memo, useCallback, useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Card } from "@components/atoms/card";
import { Text } from "@components/atoms/typography";
import { ColoredCircleIcon } from "@components/molecules";

import { ThemeContext } from "@styles/theme/context";

import type { NavigationScreenProps } from "@types";

type CardType = "income" | "expense" | "receive" | "debt";

type Props = {
  type: CardType;
  title: string;
  amount: number;
};

const CIRCLE_COLOR_OPACITY = "aa";

function AmountCard({ amount, title, type }: Props) {
  const navigation = useNavigation<NavigationScreenProps<"NewTransaction">>();
  const { theme } = useContext(ThemeContext);

  const handleNavigate = useCallback(() => {
    navigation.navigate("NewTransaction");
  }, []);

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
    <TouchableOpacity onPress={handleNavigate}>
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
    </TouchableOpacity>
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
