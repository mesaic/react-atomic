// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import SpaceBetween from '.';

storiesOf('SpaceBetween', module)
  .addWithInfo('vertical', '', () => (
    <div style={{border: '1px dotted #ccc'}}>
      <SpaceBetween vertical={1}>
        <div style={{width: 40, height: 40, backgroundColor: '#aaa', display: 'block'}} />,
        <div style={{width: 40, height: 40, backgroundColor: '#bbb', display: 'block'}} />,
        <div style={{width: 40, height: 40, backgroundColor: '#ccc', display: 'block'}} />,
      </SpaceBetween>
    </div>
  ))
  .addWithInfo('horizontal', '', () => (
    <div style={{border: '1px dotted #ccc'}}>
      <SpaceBetween horizontal={1}>
        <div style={{width: 40, height: 40, backgroundColor: '#aaa', display: 'inline-block'}} />,
        <div style={{width: 40, height: 40, backgroundColor: '#bbb', display: 'inline-block'}} />,
        <div style={{width: 40, height: 40, backgroundColor: '#ccc', display: 'inline-block'}} />,
      </SpaceBetween>
    </div>
  ))
;
