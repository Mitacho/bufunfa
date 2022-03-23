import { Text } from '@components/atoms';
import { ThemeContext } from '@styles/theme/context';
import React, { useContext } from 'react';
import type { Props } from './FormLabel.types';

function FormLabel({ label, textTransform }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <Text
      color={theme.colors.label}
      text={label}
      textTransform={textTransform}
    />
  );
}

export default FormLabel;
