import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';
import { loadStories } from './storyLoader';

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007 });

export default StorybookUIRoot;
