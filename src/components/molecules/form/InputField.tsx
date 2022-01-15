import React from "react";
import { FormControl } from "@components/atoms/form";
import { Input } from "@components/atoms/input";
import { FormLabel } from "@components/molecules/form";

import type { TextStyle, ColorValue } from "react-native";

type Props = {
  label?: string;
  placeholder?: string;
  placeholderTextColor?: ColorValue | undefined;
  textTransformLabel?: TextStyle["textTransform"];
};

function InputField({
  label,
  textTransformLabel,
  placeholderTextColor,
  placeholder,
}: Props): JSX.Element {
  return (
    <FormControl>
      {label ? (
        <FormLabel label={label} textTransform={textTransformLabel} />
      ) : null}
      <Input
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </FormControl>
  );
}

export default InputField;
