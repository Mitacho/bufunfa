import React, { useContext, useCallback } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import { Button } from "@components/atoms";
import { InputField } from "@components/molecules";

import { ThemeContext } from "@styles/theme/context";
import { ProfileContext } from "@context/ProfileContext";

import type { ScreenProps } from "@types";

export default function ProfileScreen({}: ScreenProps<"Profile">): JSX.Element {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  const { name, handleChangeName } = useContext(ProfileContext);

  const onPressChangeTheme = useCallback(() => {
    handleChangeTheme();
  }, []);

  return (
    <SafeAreaView
      style={[{ height: "100%", backgroundColor: theme.colors.background }]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={[{ padding: theme.spacing.l }]}>
          <InputField
            placeholder="Como você se chama ?"
            value={name}
            onChangeText={handleChangeName}
          />
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
