// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Color from '.';

storiesOf('Color', module)
  .add('default', () => (
    <Color color='accent'>Accent</Color>
  ))
;
