// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import BackgroundColor from '.';
import Color from '../Color';

storiesOf('BackgroundColor', module)
  .addWithInfo('default', '', () => (
    <BackgroundColor color='accent'>Foo</BackgroundColor>
  ), {inline: true})
  .addWithInfo('with Color', '', () => (
    <BackgroundColor color='accent'>
      <Color color='textOnAccent'>Foo</Color>
    </BackgroundColor>
  ), {inline: true})
;
