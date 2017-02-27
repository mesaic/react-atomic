// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Padding from '.';
import BackgroundColor from '../BackgroundColor';
import Color from '../Color';

storiesOf('Padding', module)
  .addWithInfo('all = 1', undefined, () => (
    <div style={{border: '1px solid #ccc'}}>
    <Padding all={1}>
      <div style={{backgroundColor: '#555', height: 80}} />
    </Padding>
    </div>
  ), {inline: true})
;
