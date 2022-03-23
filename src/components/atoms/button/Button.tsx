import { ThemeContext } from '@styles/theme/context';
import React, { memo, useContext, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Button.styles';
import type { ButtonVariant, ButtonVariants, Props } from './Button.types';

function Button({
  text,
  color,
  textColor,
  variant,
  height,
  ...props
}: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);

  const buttonVariants = useMemo(
    (): ButtonVariant<typeof styles[ButtonVariants]> => ({
      dashed: styles.dashedButton,
      transparent: styles.transparentButton,
    }),
    [],
  );

  return (
    <TouchableOpacity {...props}>
      <View
        style={[
          styles.button,
          {
            height: height || 60,
          },
          variant
            ? { ...buttonVariants[variant], borderColor: color }
            : { backgroundColor: color },
        ]}>
        <Text
          style={[
            styles.text,
            {
              color: variant
                ? textColor || theme.colors.text
                : textColor || '#171717',
            },
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default memo(Button);
