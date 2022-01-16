import React, { createContext, useCallback, useState } from "react";

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

  const saveUsername = useCallback((name: string) => {
    try {
      console.log(`Usuário salvo com sucesso: ${name}`);

      clearTimeout(saveTimeout);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ProfileContext.Provider value={{ name, handleChangeName }}>
      {children}
    </ProfileContext.Provider>
  );
}
