// @flow
import {storiesOf} from '@storybook/react';
import React from 'react';

import Grid from '../Grid';

const divs = () => [
  <div key='1' style={{height: 40, backgroundColor: '#aaa'}} />,
  <div key='2' style={{height: 40, backgroundColor: '#bbb'}} />,
  <div key='3' style={{height: 40, backgroundColor: '#ccc'}} />,
  <div key='4' style={{height: 40, backgroundColor: '#ddd'}} />,
  <div key='5' style={{height: 40, backgroundColor: '#eee'}} />,
];

storiesOf('Grid', module)
  .addWithInfo('default', '', () => (
    <Grid>
      {divs()}
    </Grid>
  ))
  .addWithInfo('weights', '', () => (
    <Grid weights={[2, 1]}>
      <div key='1' style={{height: 40, backgroundColor: '#aaa'}} />
      <div key='2' style={{height: 40, backgroundColor: '#bbb'}} />
    </Grid>
  ))
  .addWithInfo('break never', '', () => (
    <Grid breakAt='never'>
      {divs()}
    </Grid>
  ))
  .addWithInfo('Grid auto behaviour', 'Notice how the Flex childs of Grid have auto set to `false`, so that the items are the same width.', () => (
    <Grid>
      <div key='1' style={{height: 40, backgroundColor: '#aaa'}}>foooooooooooooooooooooooooooooooooooooo</div>
      <div key='2' style={{height: 40, backgroundColor: '#ccc'}}>fooooooooooooooooo</div>
    </Grid>
  ))
  .addWithInfo('spacing', '', () => (
    <Grid spacing={2}>
      {divs()}
    </Grid>
  ))
  .addWithInfo('breakAt tablet', 'It breaks (i.e layouts as columns) at mobile per default.', () => (
    <Grid breakAt='tablet'>
      {divs()}
    </Grid>
  ))
;
