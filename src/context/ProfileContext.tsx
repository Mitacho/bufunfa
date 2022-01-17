import React, { createContext, useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ProfileContextData = {
  name: string;
  handleChangeName: (name: string) => void;
};

type Props = {
  children: React.ReactNode;
};

let saveTimeout: NodeJS.Timeout;

export const ProfileContext = createContext({} as ProfileContextData);

export default function ProfileProvider({ children }: Props): JSX.Element {
  const [name, setName] = useState("");

  const handleChangeName = useCallback((name: string) => {
    setName(name);
    autoSaveName(name);
  }, []);

  const autoSaveName = useCallback((name: string) => {
    if (saveTimeout) {
      clearTimeout(saveTimeout);
    }

    saveTimeout = setTimeout(() => {
      saveUsername(name);
    }, 3000);
  }, []);

  const saveUsername = useCallback(async (name: string) => {
    try {
      await AsyncStorage.setItem("@name", name);

      clearTimeout(saveTimeout);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getUsername = useCallback(async () => {
    try {
      const username = await AsyncStorage.getItem("@name");

      if (username) {
        setName(username);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getUsername();
  }, []);

  return (
    <ProfileContext.Provider value={{ name, handleChangeName }}>
      {children}
    </ProfileContext.Provider>
  );
}
