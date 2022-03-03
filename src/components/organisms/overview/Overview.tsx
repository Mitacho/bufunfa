import React, { memo, useCallback, useContext } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BalanceCard, AmountCard } from "@components/molecules";
import { Button } from "@components/atoms";

import { ThemeContext } from "@styles/theme/context";
import themeConstants from "@styles/theme/constants";

import type { Props } from "./Overview.types";
import type { NavigationScreenProps } from "@types";

function Overview(props: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation<NavigationScreenProps<"NewTransaction">>();

  const handleNavigate = useCallback(() => {
    navigation.navigate("NewTransaction");
  }, []);

  return (
    <View style={[{ marginHorizontal: themeConstants.spacing.m }]}>
      <BalanceCard amount={3000} />
      <AmountCard type="income" amount={1800.49} title="Entradas" />
      <AmountCard type="expense" amount={1.5} title="Saídas" />
      <AmountCard type="receive" amount={0} title="A receber" />
      <AmountCard type="debt" amount={0} title="Dívidas" />
      <Button
        text="Nova transação"
        color={theme.colors.buttonPrimary}
        style={{
          marginBottom: themeConstants.spacing.m,
          marginTop: themeConstants.spacing.xl,
        }}
        onPress={handleNavigate}
      />
    </View>
  );
}

export default memo(Overview);
