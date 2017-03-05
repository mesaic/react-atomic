// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import TextAlign from '.';

storiesOf('TextAlign', module)
  .addWithInfo('align left', '', () => (
    <TextAlign align={'left'}>
      Foo bar rab ooF!
    </TextAlign>
  ))
  .addWithInfo('align right', '', () => (
    <TextAlign align={'right'}>
      Foo bar rab ooF!
    </TextAlign>
  ))
  .addWithInfo('align center', '', () => (
    <TextAlign align={'center'}>
      Foo bar rab ooF!
    </TextAlign>
  ))
;
