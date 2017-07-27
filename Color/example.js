// @flow
import {storiesOf} from '@storybook/react';
import React from 'react';

import Color from '.';

storiesOf('Color', module)
  .addWithInfo('default', '', () => (
    <Color color='accent'>Accent</Color>
  ))
  .addWithInfo('inject', '', () => (
    <Color inject color='accent'>Accent</Color>
  ))
;
