import React, { createContext, useState } from "react";

import light from "./light";
import dark from "./dark";

import type { Theme } from "./types";

export type ThemeContextData = {
  theme: Theme;
  handleChangeTheme: () => void;
};

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextData);

export default function ThemeProvider({ children }: Props): JSX.Element {
  const [darkMode, setDarkMode] = useState<Boolean>(false);

  function handleChangeTheme(): void {
    setDarkMode(previousState => !previousState);
  }

  return (
    <ThemeContext.Provider
      value={{ theme: darkMode ? dark : light, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
