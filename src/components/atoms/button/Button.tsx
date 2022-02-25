import React, { useContext, memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "@styles/theme/context";

import { styles } from "./Button.styles";

import type { Props } from "./Button.types";

function Button({ text, color, ...props }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity {...props}>
      <View style={[styles.button, { backgroundColor: color }]}>
        <Text
          style={[
            styles.text,
            { color: "#171717", fontSize: theme.fontSize.m },
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default memo(Button);
