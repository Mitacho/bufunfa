import React from "react";
import { FormControl, Input } from "@components/atoms";
import { FormLabel } from "@components/molecules";

import type { Props } from "./InputField.types";

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
