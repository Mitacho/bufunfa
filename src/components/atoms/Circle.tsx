import React, { memo, useContext } from "react";
import { View, StyleSheet } from "react-native";

import { ThemeContext } from "@styles/theme/context";

import type { StyleProp, ViewStyle } from "react-native";

type Props = {
  height?: number;
  width?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

function Circle({ height = 24, width = 24, color, style }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[
        {
          height,
          width,
          borderRadius: width / 2,
          backgroundColor: color || theme.colors.blue,
        },
        style,
      ]}
    />
  );
}

export default memo(Circle);
