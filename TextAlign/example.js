// @flow
import {storiesOf} from '@storybook/react';
import React from 'react';

import TextAlign from '.';

storiesOf('TextAlign', module)
  .addWithInfo('foo', '', () => (
    <TextAlign align={'left'}>
      <p>foo</p>
    </TextAlign>
  ))
  .addWithInfo('foo bar', '', () => (
    <TextAlign align='left'>
      <p>foo</p>
      <p>bar</p>
    </TextAlign>
  ))
  .addWithInfo('align left', '', () => (
    <TextAlign align='left'>
      <span>Foo bar rab ooF!</span>
    </TextAlign>
  ))
  .addWithInfo('align right', '', () => (
    <TextAlign align='right'>
      Foo bar rab ooF!
    </TextAlign>
  ))
  .addWithInfo('align center', '', () => (
    <TextAlign align='center'>
      Foo bar rab ooF!
    </TextAlign>
  ))
;
