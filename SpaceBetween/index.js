// @flow
import React from 'react';

import type {TNumber} from '../types';
import Margin from '../Margin';

export default function SpaceBetween({vertical, children: childrenProp}: {
  vertical?: ?TNumber,
  children?: any,
}): * {
  const children = React.Children.toArray(childrenProp);
  return (
    <div>
      {children.map((child: *, idx: number): * => {
        const notLast = idx !== children.length - 1;
        return (
          <Margin bottom={notLast && vertical ? vertical : undefined} key={idx}>
            {child}
          </Margin>
        );
      })}
    </div>
  );
}
