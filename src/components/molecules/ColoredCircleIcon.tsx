import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "@components/atoms/Icon";
import Circle from "@components/atoms/Circle";

import { ThemeContext } from "@styles/theme/context";

import {
  DonateIcon,
  ReceiveMoneyIcon,
  CreditCardIcon,
  SavingIcon,
  WalletIcon,
} from "@assets/icons";

type IconType = "income" | "expense" | "receive" | "debt" | "wallet";
type IconVariant = "right" | "left";
type Props = {
  icon: IconType;
  variant?: IconVariant;
  circleSize?: number;
  circleColor: string;
  iconSize?: number;
  iconColor?: string;
};

const getIcon = {
  income: SavingIcon,
  expense: CreditCardIcon,
  receive: ReceiveMoneyIcon,
  debt: DonateIcon,
  wallet: WalletIcon,
};

function ColoredCircleIcon({
  icon,
  circleColor,
  circleSize,
  iconColor,
  iconSize,
  variant,
}: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { marginRight: variant === "left" ? theme.spacing.s : 0 },
      ]}>
      <Circle
        height={circleSize || 40}
        width={circleSize || 40}
        style={
          variant === "right"
            ? styles.circleRight
            : styles.circleLeft || styles.circleLeft
        }
        color={circleColor}
      />
      <Icon
        svg={getIcon[icon]}
        fill={iconColor || theme.colors.cardIcon}
        height={iconSize || 40}
        width={iconSize || 40}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  circleLeft: {
    position: "absolute",
    left: -6,
  },
  circleRight: {
    position: "absolute",
    right: 10,
  },
});

export default ColoredCircleIcon;
