import React, { useContext, useCallback } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import { ThemeContext } from "@styles/theme/context";
import { Button } from "@components/atoms/button";
import { InputField } from "@components/molecules/form";

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
          <InputField placeholder="Como você se chama ?" />
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
