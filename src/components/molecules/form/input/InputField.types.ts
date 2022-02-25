import type {
  TextStyle,
  ColorValue,
  TextInputProps,
  FlexStyle,
} from "react-native";

export type Props = TextInputProps & {
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
