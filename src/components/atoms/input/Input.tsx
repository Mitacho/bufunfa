import React, { memo, useState, useCallback, useContext } from "react";
import { StyleSheet, TextInput } from "react-native";

import { ThemeContext } from "@styles/theme/context";

import type { ColorValue } from "react-native";

type Props = {
  placeholder?: string | undefined;
  placeholderTextColor?: ColorValue | undefined;
};

function Input({ placeholder, placeholderTextColor }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState("");

  const handleChangeText = useCallback(text => setText(text), []);

  return (
    <TextInput
      style={[
        styles.text,
        styles.input,
        {
          backgroundColor: theme.colors.input,
          color: theme.colors.textInput,
          fontSize: theme.fontSize.m,
        },
      ]}
      value={text}
      onChangeText={handleChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor || theme.colors.placeholder}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins",
    textAlignVertical: "center",
  },
  input: {
    width: "100%",
    height: 60,
    borderRadius: 4,
  },
});

export default memo(Input);
