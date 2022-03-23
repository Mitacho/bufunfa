import ThemeProvider from '@styles/theme/context';
import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { Button } from './index';

const text = 'Hello world';

it('renders correctly', () => {
  const { getByText } = render(
    <ThemeProvider>
      <Button color="#030303" text={text} />
    </ThemeProvider>,
  );

  getByText(text);
});
