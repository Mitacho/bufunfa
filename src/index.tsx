import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import App from "./App";
import ThemeProvider from "@styles/theme/context";

export default function AppIndex(): JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </NavigationContainer>
  );
}
