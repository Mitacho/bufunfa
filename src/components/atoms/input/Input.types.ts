import type { ColorValue, TextInputProps } from 'react-native';

export type Props = TextInputProps & {
  placeholder?: string | undefined;
  placeholderTextColor?: ColorValue | undefined;
  value?: string;
  onChangeText?: (text: string) => void;
};
