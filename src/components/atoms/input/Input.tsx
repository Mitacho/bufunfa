import React, { memo, useContext } from "react";
import { StyleSheet, TextInput } from "react-native";

import { ThemeContext } from "@styles/theme/context";

import type { ColorValue, TextInputProps } from "react-native";

type Props = TextInputProps & {
  placeholder?: string | undefined;
  placeholderTextColor?: ColorValue | undefined;
  value?: string;
  onChangeText?: (text: string) => void;
};

function Input({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  ...props
}: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <TextInput
      style={[
        styles.text,
        styles.input,
        {
          backgroundColor: theme.colors.input,
          color: theme.colors.textInput,
          fontSize: theme.fontSize.m,
          height: !props.multiline ? 60 : undefined,
          textAlignVertical: !props.multiline ? "center" : "top",
        },
        props.style,
      ]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor || theme.colors.placeholder}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins",
  },
  input: {
    width: "100%",
    borderRadius: 4,
  },
});

export default memo(Input);
