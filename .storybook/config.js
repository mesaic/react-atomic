// @flow
import React, {Component} from 'react';
// flow-disable-next-line
import {configure, addDecorator, setAddon} from '@kadira/storybook';
import {setOptions} from '@kadira/storybook-addon-options';
import infoAddon, {setDefaults as setInfoAddonDefaults} from '@kadira/react-storybook-addon-info';

setInfoAddonDefaults({
  inline: true,
  propTables: null,
})

setOptions({
  name: 'react-atomic',
  url: 'https://github.com/wish-technology/react-atomic',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

require('./style.css');

setAddon(infoAddon);

// addDecorator((story) => {
//   return <div style={{position: 'relative', boxSizing: 'border-box', margin: 80, border: '1px dotted #ccc'}}>{story()}</div>
// });

function loadStories() {
  require('../BackgroundColor/example');
  require('../Color/example');
  require('../Flex/example');
  require('../Margin/example');
  require('../Padding/example');
  require('../SpaceBetween/example');
}

configure(loadStories, module);
