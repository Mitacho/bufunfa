import type { TouchableOpacityProps } from 'react-native';

type Variant = 'dashed' | 'transparent';

export type Props = TouchableOpacityProps & {
  text: string;
  color: string;
  textColor?: string;
  variant?: Variant;
  height?: number;
};

export type ButtonVariants = 'dashedButton' | 'transparentButton';
export type ButtonVariant<T> = { [key in Variant]: T };
