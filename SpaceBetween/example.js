// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import SpaceBetween from '.';

const children = (inlineBlock) => [
  <div style={{width: 40, height: 40, backgroundColor: '#aaa', display: inlineBlock ? 'inline-block' : 'block'}} />,
  <div style={{width: 40, height: 40, backgroundColor: '#bbb', display: inlineBlock ? 'inline-block' : 'block'}} />,
  <div style={{width: 40, height: 40, backgroundColor: '#ccc', display: inlineBlock ? 'inline-block' : 'block'}} />,
];

storiesOf('SpaceBetween', module)
  .addWithInfo('vertical', '', () => (
    <div style={{border: '1px dotted #ccc'}}>
      <SpaceBetween vertical={1}>
        {children(false)}
      </SpaceBetween>
    </div>
  ))
  .addWithInfo('horizontal', '', () => (
    <div style={{border: '1px dotted #ccc'}}>
      <SpaceBetween horizontal={1}>
        {children(true)}
      </SpaceBetween>
    </div>
  ))
;
