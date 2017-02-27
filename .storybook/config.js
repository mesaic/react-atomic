// @flow
import React, {Component} from 'react';
// flow-disable-next-line
import {configure, addDecorator} from '@kadira/storybook';

require('./style.css');

// flow-disable-next-line
const requireContext = require.context('..', true, /\.example\.js$/)

addDecorator((story) => {
  return <div style={{position: 'relative', boxSizing: 'border-box', margin: 20, border: '1px dotted #ccc'}}>{story()}</div>
});

function loadStories() {
  requireContext.keys().forEach(requireContext);
}

configure(loadStories, module);
