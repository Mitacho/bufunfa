import React, { useContext, memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemeContext } from "@styles/theme/context";
import { ProfileContext } from "@context/ProfileContext";
import { Text } from "@components/atoms";

import type { Props } from "./Greetings.types";

function Greetings({ onNavigate }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const { name } = useContext(ProfileContext);

  return (
    <View style={[{ paddingVertical: theme.spacing.l }]}>
      <TouchableOpacity onPress={onNavigate}>
        <Text
          text={name ? `Olá, ${name}!` : "Olá! Qual é o seu nome ?"}
          weight="medium"
          fontSize="l"
        />
      </TouchableOpacity>
    </View>
  );
}

export default memo(Greetings);
