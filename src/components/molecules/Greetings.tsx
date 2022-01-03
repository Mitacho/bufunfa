import React, { useContext, memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemeContext } from "@styles/theme/context";
import Button from "../atoms/button/Button";
import Text from "@components/atoms/typography/Text";

type Props = {
  onNavigate: () => void;
};

function Greetings({ onNavigate }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[{ margin: theme.spacing.l }]}>
      <TouchableOpacity onPress={onNavigate}>
        <Text text="Olá, Mitacho!" weight="medium" fontSize="l" />
      </TouchableOpacity>
    </View>
  );
}

export default memo(Greetings);