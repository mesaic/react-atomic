// @flow
import {storiesOf} from '@storybook/react';
import React from 'react';

import BackgroundColor from '../BackgroundColor';
import Color from '../Color';
import Padding from '.';

storiesOf('Padding', module)
  .addWithInfo('all = 1', 'The gridSize is defined with `styles.gridSize`, defaults to 20.', () => (
    <Padding all={1}>
      <BackgroundColor color='grayDark'>
        <Color color='textOnGray'>
          <div>
            This element has color, background-color and padding applied to it.
          </div>
        </Color>
      </BackgroundColor>
    </Padding>
  ))
  .addWithInfo('responsive', '', () => (
    <Padding all={{mobile: 'half', tablet: 2}}>
      <BackgroundColor color='grayDark'>
        <Color color='textOnGray'>
          <div>
            foo
          </div>
        </Color>
      </BackgroundColor>
    </Padding>
  ))
;
