// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import BackgroundColor from '../BackgroundColor';
import Color from '../Color';
import Margin from '.';

storiesOf('Margin', module)
  .addWithInfo('all = 1', 'The gridSize is defined with `styles.gridSize`, defaults to 20.', () => (
    <Margin all={1}>
      <BackgroundColor color='grayDark'>
        <Color color='textOnGray'>
          This element has color, background-color and margin applied to it.
        </Color>
      </BackgroundColor>
    </Margin>
  ))
;
