// @flow
import {setOptions} from '@storybook/addon-options';
import {configure, setAddon} from '@storybook/react';
import infoAddon, {setDefaults as setInfoAddonDefaults} from 'mesaic-react-storybook-addon-info';

setInfoAddonDefaults({
  inline: true,
  propTables: null,
});

setOptions({
  name: 'react-atomic',
  url: 'https://github.com/mesaic/react-atomic',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

require('./style.less');

setAddon(infoAddon);

function loadStories(): void {
  require('../BackgroundColor/example');
  require('../Color/example');
  require('../Flex/example');
  require('../Margin/example');
  require('../Padding/example');
  require('../SpaceBetween/example');
  require('../TextAlign/example');
  require('../Grid/example');
}

configure(loadStories, module);
