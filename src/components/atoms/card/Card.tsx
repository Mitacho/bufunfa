import React, { memo, useContext } from "react";
import { View } from "react-native";

import { ThemeContext } from "@styles/theme/context";

import type { StyleProp, ViewStyle } from "react-native";

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  color?: string;
};

function Card({ children, style, color }: Props) {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[
        {
          padding: theme.spacing.m,
          backgroundColor: color || theme.colors.cardBalance,
          width: "100%",
          borderRadius: 8,
        },
        style,
      ]}>
      {children}
    </View>
  );
}

export default memo(Card);
