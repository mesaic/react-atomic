// @flow
import React from 'react';

import type {TNumber} from '../types';
import Margin from '../Margin';

export default function SpaceBetween({vertical, horizontal, children: childrenProp}: {
  vertical?: ?TNumber,
  horizontal?: ?TNumber,
  children?: any,
}): * {
  const children = React.Children.toArray(childrenProp);
  return (
    <div>
      {children.map((child: *, idx: number): * => {
        const notLast = idx !== children.length - 1;
        return (
          <Margin right={notLast && horizontal ? horizontal : undefined} bottom={notLast && vertical ? vertical : undefined} key={idx}>
            {child}
          </Margin>
        );
      })}
    </div>
  );
}
