import React from 'react';
import { Text } from 'react-native';

import { ThemeProvider } from 'styled-components';

import theme from './theme';

export default () => (
  <ThemeProvider theme={theme}>
    <Text>Fonte Lato</Text>
  </ThemeProvider>
);
