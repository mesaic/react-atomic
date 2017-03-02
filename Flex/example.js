// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Flex from '.';
import BackgroundColor from '../BackgroundColor';
import Color from '../Color';
import Margin from '../Margin';
import Padding from '../Padding';

storiesOf('Flex', module)
  .addWithInfo('alignItems = \'center\'', () => (
    <Flex alignItems='center' justifyContent='center' wrap>
      <Flex.Child>
        <Margin all={1}>
          <Padding all={1}>
            <BackgroundColor color='gray'>
              <Color color='textOnGray'>
                A
              </Color>
            </BackgroundColor>
          </Padding>
        </Margin>
      </Flex.Child>
      <Flex.Child>
        <Margin all={1}>
          <Padding all={1}>
            <BackgroundColor color='accent'>
              <Color color='textOnAccent'>
                B
              </Color>
            </BackgroundColor>
          </Padding>
        </Margin>
      </Flex.Child>
    </Flex>
  ))
;
