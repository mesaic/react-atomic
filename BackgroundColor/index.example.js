// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import BackgroundColor from '.';
import Color from '../Color';

storiesOf('BackgroundColor', module)
  .add('default', () => (
    <BackgroundColor color='accent'>BackgroundColor = accent</BackgroundColor>
  ))
  .add('with Color', () => (
    <BackgroundColor color='accent'>
      <Color color='textOnAccent'>BackgroundColor = accent, Color = textOnAccent</Color>
    </BackgroundColor>
  ))
;
