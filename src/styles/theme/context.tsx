import React, { createContext, useState, useCallback, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const DARKMODE_ASYNCSTORAGE_KEY: string = "@darkMode";

export const ThemeContext = createContext({} as ThemeContextData);

export default function ThemeProvider({ children }: Props): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const getStoredTheme = useCallback(async (): Promise<void> => {
    try {
      setDarkMode(
        (await AsyncStorage.getItem(DARKMODE_ASYNCSTORAGE_KEY)) === "true",
      );
    } catch (error) {
      console.error(error);
      return;
    }
  }, []);

  const saveCurrentTheme = useCallback(async (newValue): Promise<void> => {
    try {
      await AsyncStorage.setItem(DARKMODE_ASYNCSTORAGE_KEY, String(newValue));
    } catch (e) {
      // saving error
    }
  }, []);

  const handleChangeTheme = useCallback((): void => {
    setDarkMode(current => {
      const newValue = !current;
      saveCurrentTheme(newValue);
      return newValue;
    });
  }, []);

  useEffect(() => {
    getStoredTheme();
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme: darkMode ? dark : light, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
