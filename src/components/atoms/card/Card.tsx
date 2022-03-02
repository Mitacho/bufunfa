import React, { memo, useContext } from "react";
import { View } from "react-native";

import { ThemeContext } from "@styles/theme/context";
import themeConstants from "@styles/theme/constants";

import type { Props } from "./Card.types";

function Card({ children, style, color }: Props) {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[
        {
          padding: themeConstants.spacing.m,
          backgroundColor: color || theme.colors.cardBalance,
          width: "100%",
          borderRadius: themeConstants.borderRadius.m,
        },
        style,
      ]}>
      {children}
    </View>
  );
}

export default memo(Card);
