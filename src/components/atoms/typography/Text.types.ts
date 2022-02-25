import type { TextStyle, TextProps } from "react-native";

export type Props = TextProps & {
  text: string | number;
  color?: string;
  currency?: boolean;
  weight?: "normal" | "medium";
  fontSize?: "s" | "m" | "l" | "xl";
  textTransform?: TextStyle["textTransform"];
};
