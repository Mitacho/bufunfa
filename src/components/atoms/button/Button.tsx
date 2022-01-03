import React, { useContext, memo } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { ThemeContext } from "@styles/theme/context";

import type { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  text: string;
  color: string;
};

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
const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins",
    textAlign: "center",
  },
  button: {
    width: "100%",
    height: 60,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default memo(Button);
