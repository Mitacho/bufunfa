import { Greetings } from '@components/molecules';
import { Overview } from '@components/organisms';
import themeConstants from '@styles/theme/constants';
import { ThemeContext } from '@styles/theme/context';
import type { ScreenProps } from '@types';
import React, { useCallback, useContext } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

export default function HomeScreen({
  navigation,
}: ScreenProps<'Home'>): JSX.Element {
  const { theme } = useContext(ThemeContext);

  const handleNavigateToProfile = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  return (
    <SafeAreaView
      style={[{ height: '100%', backgroundColor: theme.colors.background }]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={[{ padding: themeConstants.spacing.m }]}>
          <Greetings onNavigate={handleNavigateToProfile} />
        </View>
        <Overview />
      </ScrollView>
    </SafeAreaView>
  );
}
