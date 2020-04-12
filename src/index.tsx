import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

import { Typography } from './components';

export default () => (
  <ThemeProvider theme={theme}>
    <Typography variant="headingH1">headingH1</Typography>
    <Typography variant="headingH1External">headingH1External</Typography>
    <Typography fontFamily="Merriweather" fontSize={30} fontWeight="bold">Generic With Bold</Typography>
    <Typography fontFamily="Merriweather" fontSize={20}>Generic Without Bold</Typography>
  </ThemeProvider>
);
