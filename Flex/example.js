// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import BackgroundColor from '../BackgroundColor';
import Color from '../Color';
import Padding from '../Padding';
import Flex from '.';

const size = 2;

const createExampleWithProps = (props) => (
  <Flex {...props}>
    <Flex.Child>
      <Padding all={size}>
        <BackgroundColor color='gray'>
          <Color color='textOnGray'>
            A
          </Color>
        </BackgroundColor>
      </Padding>
    </Flex.Child>
    <Flex.Child>
      <Padding all={size}>
        <BackgroundColor color='accent'>
          <Color color='textOnAccent'>
            B
          </Color>
        </BackgroundColor>
      </Padding>
    </Flex.Child>
    <Flex.Child>
      <Padding all={size}>
        <BackgroundColor color='gray'>
          <Color color='textOnGray'>
            C
          </Color>
        </BackgroundColor>
      </Padding>
    </Flex.Child>
    <Flex.Child>
      <Padding all={size}>
        <BackgroundColor color='accent'>
          <Color color='textOnAccent'>
            D
          </Color>
        </BackgroundColor>
      </Padding>
    </Flex.Child>
  </Flex>
);

storiesOf('Flex', module)
  .addWithInfo(
    'default',
    '`flexDirection` is \'row\' by default.',
    () => createExampleWithProps({}),
  )
  .addWithInfo(
    'default with wrap',
    'Wrapping is default on mobile, opt in via `wrap` prop on desktop',
    () => createExampleWithProps({wrap: true}),
  )
  .addWithInfo(
    'direction = column',
    '',
    () => createExampleWithProps({direction: 'column'}),
  )
  .addWithInfo(
    'direction = column, alignItems = flex-start',
    '',
    () => createExampleWithProps({direction: 'column', alignItems: 'flex-start'}),
  )
;
