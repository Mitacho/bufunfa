import React, { useContext, useCallback } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import { Greetings } from "@components/molecules";
import { Overview } from "@components/organisms";
import { ThemeContext } from "@styles/theme/context";

import type { ScreenProps } from "@types";

export default function HomeScreen({
  navigation,
}: ScreenProps<"Home">): JSX.Element {
  const { theme } = useContext(ThemeContext);

  const handleNavigateToProfile = useCallback(() => {
    navigation.navigate("Profile");
  }, []);

  return (
    <SafeAreaView
      style={[{ height: "100%", backgroundColor: theme.colors.background }]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={[{ padding: theme.spacing.m }]}>
          <Greetings onNavigate={handleNavigateToProfile} />
        </View>
        <Overview />
      </ScrollView>
    </SafeAreaView>
  );
}
