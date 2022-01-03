import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import { HomeScreen, ProfileScreen } from "@screens";

import { ThemeContext } from "@styles/theme/context";

import type { StackParamList } from "@types";

const Stack = createNativeStackNavigator<StackParamList>();

export default function App(): JSX.Element {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <StatusBar
        barStyle={theme.colors.statusBarContent}
        backgroundColor={theme.colors.statusBar}
      />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </>
  );
}
