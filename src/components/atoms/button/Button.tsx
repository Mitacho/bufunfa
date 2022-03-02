import React, { useContext, memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./Button.styles";

import type { Props } from "./Button.types";

function Button({ text, color, ...props }: Props): JSX.Element {
  return (
    <TouchableOpacity {...props}>
      <View style={[styles.button, { backgroundColor: color }]}>
        <Text style={[styles.text]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default memo(Button);
