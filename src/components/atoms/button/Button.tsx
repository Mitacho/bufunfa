import React, { useContext, memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { ThemeContext } from "@styles/theme/context";

import { styles } from "./Button.styles";

import type { Props } from "./Button.types";

function Button({
  text,
  color,
  textColor,
  variant,
  height,
  ...props
}: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity {...props}>
      <View
        style={[
          styles.button,
          {
            height: height || 60,
          },
          variant
            ? { ...styles.dashedButton, borderColor: color }
            : { backgroundColor: color },
          ,
        ]}>
        <Text
          style={[
            styles.text,
            {
              color: variant
                ? textColor || theme.colors.text
                : textColor || "#171717",
            },
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default memo(Button);
