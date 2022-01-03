/**
 * @format
 */

import "react-native";
import React from "react";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

import App from "../App";
import ThemeProvider from "@styles/theme/context";

it("renders correctly", () => {
  renderer.create(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
});
