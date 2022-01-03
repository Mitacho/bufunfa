import React, { memo, useContext } from "react";
import { View } from "react-native";
import AmountCard from "@components/molecules/AmountCard";

import { ThemeContext } from "@styles/theme/context";

type Props = {};

function Overview(props: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[{ marginHorizontal: theme.spacing.l }]}>
      <AmountCard />
    </View>
  );
}

export default memo(Overview);
