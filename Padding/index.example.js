// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Padding from '.';
import BackgroundColor from '../BackgroundColor';
import Color from '../Color';

storiesOf('Padding', module)
  .addWithInfo('all = 1', 'The gridSize is defined with `styles.gridSize`, defaults to 20.', () => (
    <Padding all={1}>
      <BackgroundColor color='grayDark'>
        <Color color='textOnGray'>
          This element has color, background-color and padding applied to it.
        </Color>
      </BackgroundColor>
    </Padding>
  ))
;
