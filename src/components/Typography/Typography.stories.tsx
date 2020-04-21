import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Typography from './Typography';

storiesOf('Typography', module)
  .add('Variant headingH1', () => (
    <Typography variant="headingH1">headingH1</Typography>
  ))
  .add('Variant headingH1External', () => (
    <Typography variant="headingH1External">headingH1External</Typography>
  ))
  .add('Generic With Bold', () => (
    <Typography fontFamily="Merriweather" fontSize={30} fontWeight="bold">Generic With Bold</Typography>
  ))
  .add('Generic Without Bold', () => (
    <Typography fontFamily="Merriweather" fontSize={20}>Generic Without Bold</Typography>
  ));
