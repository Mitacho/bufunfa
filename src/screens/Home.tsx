import React, { useContext, useCallback } from "react";
import { SafeAreaView, StatusBar, ScrollView, View } from "react-native";

import { Greetings } from "@components/molecules";
import Overview from "@components/organisms/Overview";
import { ThemeContext } from "@styles/theme/context";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { StackParamList } from "@types";

type Props = NativeStackScreenProps<StackParamList, "Home">;

export default function HomeScreen({ navigation }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  const handleNavigateToProfile = useCallback(() => {
    navigation.navigate("Profile");
  }, []);

  return (
    <SafeAreaView
      style={[{ height: "100%", backgroundColor: theme.colors.background }]}>
      <StatusBar
        barStyle={theme.colors.statusBarContent}
        backgroundColor={theme.colors.statusBar}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={[
            {
              padding: theme.spacing.l,
            },
          ]}>
          <Greetings onNavigate={handleNavigateToProfile} />
        </View>
        <Overview />
      </ScrollView>
    </SafeAreaView>
  );
}
