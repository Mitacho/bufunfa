import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import App from "./App";
import ThemeProvider from "@styles/theme/context";
import ProfileProvider from "@context/ProfileContext";

export default function AppIndex(): JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
