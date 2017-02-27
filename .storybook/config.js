// @flow
import React, {Component} from 'react';
// flow-disable-next-line
import {configure, addDecorator, setAddon} from '@kadira/storybook';
import {setOptions} from '@kadira/storybook-addon-options';
import infoAddon, {setDefaults as setInfoAddonDefaults} from '@kadira/react-storybook-addon-info';

setInfoAddonDefaults({
  inline: true,
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

// flow-disable-next-line
const requireContext = require.context('..', true, /\.example\.js$/)

setAddon(infoAddon);

// addDecorator((story) => {
//   return <div style={{position: 'relative', boxSizing: 'border-box', margin: 80, border: '1px dotted #ccc'}}>{story()}</div>
// });

function loadStories() {
  requireContext.keys().forEach(requireContext);
}

configure(loadStories, module);
