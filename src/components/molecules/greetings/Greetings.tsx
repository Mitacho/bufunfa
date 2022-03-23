import { Text } from '@components/atoms';
import { ProfileContext } from '@context/ProfileContext';
import themeConstants from '@styles/theme/constants';
import React, { memo, useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import type { Props } from './Greetings.types';

function Greetings({ onNavigate }: Props): JSX.Element {
  const { name } = useContext(ProfileContext);

  return (
    <View style={[{ paddingVertical: themeConstants.spacing.l }]}>
      <TouchableOpacity onPress={onNavigate}>
        <Text
          text={name ? `Olá, ${name}!` : 'Olá! Qual é o seu nome ?'}
          weight="medium"
          fontSize="l"
        />
      </TouchableOpacity>
    </View>
  );
}

export default memo(Greetings);
