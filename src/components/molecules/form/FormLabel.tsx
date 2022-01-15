import React, { useContext } from "react";

import { Text } from "@components/atoms/typography";

import { ThemeContext } from "@styles/theme/context";

import type { TextStyle } from "react-native";

type Props = {
  label: string;
  uppercase?: boolean;
  textTransform?: TextStyle["textTransform"];
};

function FormLabel({ label, textTransform }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <Text
      color={theme.colors.label}
      text={label}
      textTransform={textTransform}
    />
  );
}

export default FormLabel;
