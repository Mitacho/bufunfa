import React, { memo, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "@components/atoms/card";

import { ThemeContext } from "@styles/theme/context";
import { Text } from "@components/atoms/typography";

type Props = {};

function AmountCard(props: Props) {
  const { theme } = useContext(ThemeContext);
  return (
    <Card>
      <View
        style={[
          styles.cardHeader,
          {
            backgroundColor: theme.colors.red,
          },
        ]}>
        <Text
          text="Saldo na sua carteira"
          fontSize="m"
          color={theme.colors.cardText}
        />
      </View>
      <View
        style={[
          {
            marginTop: theme.spacing.s,
            backgroundColor: theme.colors.red,
          },
        ]}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default memo(AmountCard);
