// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Padding from '.';
import BackgroundColor from '../BackgroundColor';

storiesOf('Padding', module)
  .add('default', () => (
    <Padding all={1}><BackgroundColor color='text'><Color color='text'{' '}</BackgroundColor></Padding>
  ))
;
