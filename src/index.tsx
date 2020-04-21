import React, { useEffect, useCallback, useState } from 'react';

import Storybook from '../storybook';
import App from './App';

export default () => {
  const [storybookActive, setStorybookActive] = useState(false);
  const toggleStorybook = useCallback(
    () => setStorybookActive((active) => !active),
    [],
  );

  useEffect(() => {
    // eslint-disable-next-line no-undef
    if (__DEV__) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const DevMenu = require('react-native-dev-menu');
      DevMenu.addItem('Toggle Storybook', toggleStorybook);
    }
  }, [toggleStorybook]);

  return storybookActive ? <Storybook /> : <App />;
};
