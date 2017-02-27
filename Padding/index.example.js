// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Padding from '.';
import BackgroundColor from '../BackgroundColor';
import Color from '../Color';

storiesOf('Padding', module)
  .add('default', () => (
    <Padding all={1}>
      <BackgroundColor color='grayDark'>
        <Color color='textOnGray'>
          <pre style={{backgroundColor: '#555'}}>{'{all: {1}}'}</pre>
        </Color>
      </BackgroundColor>
    </Padding>
  ))
;
