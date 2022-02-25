import React, { memo, useMemo, useContext } from "react";
import { Text as TextBase } from "react-native";
import { ThemeContext } from "@styles/theme/context";

import type { Props } from "./Text.types";

function Text({
  text,
  currency,
  weight = "normal",
  fontSize = "m",
  color,
  textTransform,
  ...props
}: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  const memoizedFontWeight = useMemo(
    () => ({
      normal: "Poppins",
      medium: "Poppins-Medium",
    }),
    [],
  );

  const memoizedFontSize = {
    s: theme.fontSize.s,
    m: theme.fontSize.m,
    l: theme.fontSize.l,
    xl: theme.fontSize.xl,
  };

  return (
    <TextBase
      {...props}
      style={[
        {
          color: color || theme.colors.text,
          fontSize: memoizedFontSize[fontSize],
          fontFamily: memoizedFontWeight[weight],
          textTransform,
        },
      ]}>
      {currency
        ? Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(parseFloat(String(text)))
        : text}
    </TextBase>
  );
}

export default memo(Text);
