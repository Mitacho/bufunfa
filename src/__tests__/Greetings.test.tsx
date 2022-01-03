import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";

import { Greetings } from "@components";
import ThemeProvider from "@styles/theme/context";

it("renders correctly", () => {
  const { getByText } = render(
    <ThemeProvider>
      <Greetings />
    </ThemeProvider>,
  );

  getByText("Olá, Mitacho!");
});
