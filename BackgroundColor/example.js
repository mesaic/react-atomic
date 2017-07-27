// @flow
import {storiesOf} from '@storybook/react';
import React from 'react';

import Color from '../Color';
import BackgroundColor from '.';

storiesOf('BackgroundColor', module)
  .addWithInfo('default', '', () => (
    <BackgroundColor color='accent'>Foo</BackgroundColor>
  ))
  .addWithInfo('inject', '', () => (
    <BackgroundColor inject color='accent'>Foo</BackgroundColor>
  ))
  .addWithInfo('with Color', '', () => (
    <BackgroundColor color='accent'>
      <Color color='textOnAccent'>Foo</Color>
    </BackgroundColor>
  ))
;
