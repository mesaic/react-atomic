// @flow
import React from 'react';
import {storiesOf} from '@kadira/storybook';

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
    <Grid weights={[2, 2, 1, 1, 1]}>
      {divs()}
    </Grid>
  ))
  .addWithInfo('break never', '', () => (
    <Grid breakAt='never'>
      {divs()}
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
  .addWithInfo('breakAt default', '', () => (
    <Grid breakAt='tablet'>
      {divs()}
    </Grid>
  ))
;
