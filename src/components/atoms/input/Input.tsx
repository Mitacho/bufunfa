import { ThemeContext } from '@styles/theme/context';
import React, { memo, useContext } from 'react';
import { TextInput } from 'react-native';
import styles from './Input.styles';
import type { Props } from './Input.types';

function Input({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  ...props
}: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <TextInput
      style={[
        styles.text,
        styles.input,
        {
          backgroundColor: theme.colors.input,
          color: theme.colors.textInput,
          height: !props.multiline ? 60 : undefined,
          textAlignVertical: !props.multiline ? 'center' : 'top',
        },
        props.style,
      ]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor || theme.colors.placeholder}
      {...props}
    />
  );
}

export default memo(Input);
