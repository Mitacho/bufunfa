export type IconType = 'income' | 'expense' | 'receive' | 'debt' | 'wallet';
export type IconVariant = 'right' | 'left';
export type Props = {
  icon: IconType;
  variant?: IconVariant;
  circleSize?: number;
  circleColor: string;
  iconSize?: number;
  iconColor?: string;
};
