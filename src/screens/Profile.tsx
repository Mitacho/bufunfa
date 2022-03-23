import { Button } from '@components/atoms';
import { InputField } from '@components/molecules';
import { ProfileContext } from '@context/ProfileContext';
import themeConstants from '@styles/theme/constants';
import { ThemeContext } from '@styles/theme/context';
import type { ScreenProps } from '@types';
import React, { useCallback, useContext } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

export default function ProfileScreen({}: ScreenProps<'Profile'>): JSX.Element {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  const { name, handleChangeName } = useContext(ProfileContext);

  const onPressChangeTheme = useCallback(() => {
    handleChangeTheme();
  }, [handleChangeTheme]);

  return (
    <SafeAreaView
      style={[{ height: '100%', backgroundColor: theme.colors.background }]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={[{ padding: themeConstants.spacing.l }]}>
          <InputField
            placeholder="Como você se chama ?"
            value={name}
            onChangeText={handleChangeName}
          />
          <Button
            color={theme.colors.buttonPrimary}
            onPress={onPressChangeTheme}
            text="Mudar o tema"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
