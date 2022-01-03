import React, { memo, useContext } from "react";
import { View } from "react-native";

import { ThemeContext } from "@styles/theme/context";

type Props = {
  children?: React.ReactNode;
};

function Card({ children }: Props) {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[
        {
          padding: theme.spacing.m,
          backgroundColor: theme.colors.blue,
          width: "100%",
          borderRadius: 4,
        },
      ]}>
      {children}
    </View>
  );
}

export default memo(Card);
