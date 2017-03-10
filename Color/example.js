// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Color from '.';

storiesOf('Color', module)
  .addWithInfo('default', '', () => (
    <Color color='accent'>Accent</Color>
  ))
  .addWithInfo('inject', '', () => (
    <Color inject color='accent'>Accent</Color>
  ))
;
