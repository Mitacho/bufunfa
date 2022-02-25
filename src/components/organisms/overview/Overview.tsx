import React, { memo, useContext } from "react";
import { View } from "react-native";
import { BalanceCard, AmountCard } from "@components/molecules";

import { ThemeContext } from "@styles/theme/context";

import type { Props } from "./Overview.types";

function Overview(props: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[{ marginHorizontal: theme.spacing.m }]}>
      <BalanceCard amount={3000} />
      <AmountCard type="income" amount={1800.49} title="Entradas" />
      <AmountCard type="expense" amount={1.5} title="Saídas" />
      <AmountCard type="receive" amount={0} title="A receber" />
      <AmountCard type="debt" amount={0} title="Dívidas" />
    </View>
  );
}

export default memo(Overview);
