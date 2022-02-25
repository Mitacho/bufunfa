import type { StyleProp, ViewStyle, ViewProps } from "react-native";

export type Props = ViewProps & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  color?: string;
};
