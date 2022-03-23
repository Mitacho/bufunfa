import React, { memo } from 'react';
import { View } from 'react-native';
import type { Props } from './FormControl.types';

function FormControl({ children, style }: Props): JSX.Element {
  return <View style={[style]}>{children}</View>;
}

export default memo(FormControl);
