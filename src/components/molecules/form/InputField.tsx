import React from "react";
import { FormControl } from "@components/atoms/form";
import { Input } from "@components/atoms/input";
import { FormLabel } from "@components/molecules/form";

import type {
  TextStyle,
  ColorValue,
  TextInputProps,
  FlexStyle,
} from "react-native";

type Props = TextInputProps & {
  label?: string;
  placeholder?: string;
  placeholderTextColor?: ColorValue | undefined;
  textTransformLabel?: TextStyle["textTransform"];
  value?: string;
  onChangeText?: (text: string) => void;
  marginTop?: FlexStyle["marginTop"];
  marginBottom?: FlexStyle["marginBottom"];
  paddingTop?: FlexStyle["paddingTop"];
  paddingBottom?: FlexStyle["paddingBottom"];
};

function InputField({
  label,
  textTransformLabel,
  placeholderTextColor,
  placeholder,
  value,
  onChangeText,
  marginTop,
  marginBottom,
  paddingTop,
  paddingBottom,
  ...props
}: Props): JSX.Element {
  return (
    <FormControl style={{ marginTop }}>
      {label ? (
        <FormLabel label={label} textTransform={textTransformLabel} />
      ) : null}
      <Input
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </FormControl>
  );
}

export default InputField;
