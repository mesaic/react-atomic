// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import SpaceBetween from '.';

storiesOf('SpaceBetween', module)
  .addWithInfo('vertical', '', () => (
    <SpaceBetween vertical={1}>
      <div style={{width: 40, height: 40, backgroundColor: '#aaa'}} />
      <div style={{width: 40, height: 40, backgroundColor: '#bbb'}} />
      <div style={{width: 40, height: 40, backgroundColor: '#ccc'}} />
    </SpaceBetween>
  ))
  .addWithInfo('horizontal', '', () => (
    <SpaceBetween horizontal={1}>
      <div style={{width: 40, height: 40, backgroundColor: '#aaa', display: 'inline-block'}} />
      <div style={{width: 40, height: 40, backgroundColor: '#bbb', display: 'inline-block'}} />
      <div style={{width: 40, height: 40, backgroundColor: '#ccc', display: 'inline-block'}} />
    </SpaceBetween>
  ))
;
