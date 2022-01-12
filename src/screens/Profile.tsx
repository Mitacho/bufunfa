import React, { useContext, useCallback } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";

import { ThemeContext } from "@styles/theme/context";
import { Button } from "@components/atoms/button";
import { Input } from "@components/atoms/input";

export default function ProfileScreen(): JSX.Element {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  const onPressChangeTheme = useCallback(() => {
    handleChangeTheme();
  }, []);

  return (
    <SafeAreaView
      style={[{ height: "100%", backgroundColor: theme.colors.background }]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={[{ padding: theme.spacing.l }]}>
          <Text>Perfil</Text>
          <Input />
          <Button
            color={theme.colors.buttonPrimary}
            onPress={onPressChangeTheme}
            text="Mudar o tema"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
