import React, { memo, useContext } from "react";
import { StyleSheet, View } from "react-native";
import BalanceCard from "@components/molecules/BalanceCard";
import AmountCard from "@components/molecules/AmountCard";

import { ThemeContext } from "@styles/theme/context";

type Props = {};

function Overview(props: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[styles.overview, { marginHorizontal: theme.spacing.l }]}>
      <BalanceCard amount={3000} />
      <AmountCard type="income" amount={1800.49} title="Entradas" />
      <AmountCard type="expense" amount={1.5} title="Saídas" />
      <AmountCard type="receive" amount={0} title="A receber" />
      <AmountCard type="debt" amount={0} title="Dívidas" />
    </View>
  );
}

const styles = StyleSheet.create({
  overview: {},
});

export default memo(Overview);
