// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

import BackgroundColor from '../BackgroundColor';
import Color from '../Color';
import Margin from '.';
import styles from './example.styles';

storiesOf('Margin', module)
  .addWithInfo('all = 1', 'The gridSize is defined with `styles.gridSize`, defaults to 20.', () => (
    <Margin all={1}>
      <BackgroundColor color='grayDark'>
        <Color color='textOnGray'>
          <div>
            This element has color, background-color and margin applied to it.
          </div>
        </Color>
      </BackgroundColor>
    </Margin>
  ))
  .addWithInfo('all = 1 (inject)', '', () => (
    <Margin all={1} inject>
      <BackgroundColor color='grayDark'>
        <Color color='textOnGray'>
          <div>
            This element has color, background-color and margin applied to it.
          </div>
        </Color>
      </BackgroundColor>
    </Margin>
  ))
  .addWithInfo('injecting into element with own margin', '', () => (
    <Margin all={1} inject>
      <p className={styles.titleMargin}>
        P-tag with own margin. We can see that the own margin wins because we are injecting. In this case we should not inject but use the default wrapper behaviour.
      </p>
    </Margin>
  ))
  .addWithInfo('wrapping around element with own margin', '', () => (
    <Margin all={1}>
      <p className={styles.titleMargin}>
        P-tag with own margin. We can see that the wrapping margin is applied in the layout because we are not injecting.
      </p>
    </Margin>
  ))
;
