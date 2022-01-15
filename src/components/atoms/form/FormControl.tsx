import React, { memo } from "react";
import { View } from "react-native";

import type { StyleProp, ViewStyle } from "react-native";

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

function FormControl({ children, style }: Props): JSX.Element {
  return <View style={[style]}>{children}</View>;
}

export default memo(FormControl);
