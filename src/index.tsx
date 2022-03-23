import ProfileProvider from '@context/ProfileContext';
import { NavigationContainer } from '@react-navigation/native';
import ThemeProvider from '@styles/theme/context';
import React from 'react';
import App from './App';

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
