import type { TouchableOpacityProps } from "react-native";

export type Props = TouchableOpacityProps & {
  text: string;
  color: string;
  textColor?: string;
  variant?: "dashed";
  height?: number;
};
