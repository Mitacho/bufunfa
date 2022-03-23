import { ThemeContext } from '@styles/theme/context';
import React, { memo, useContext } from 'react';
import { View } from 'react-native';
import type { Props } from './Circle.types';

function Circle({ height = 24, width = 24, color, style }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[
        {
          height,
          width,
          borderRadius: width / 2,
          backgroundColor: color || theme.colors.blue,
        },
        style,
      ]}
    />
  );
}

export default memo(Circle);
