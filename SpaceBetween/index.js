// @flow
import React from 'react';

import Margin from '../Margin';

export default function SpaceBetween({vertical, horizontal, children: childrenProp}: {
  vertical: ?TNumber,
  horizontal: ?TNumber,
  children: React.Element<any>,
}): * {
  const children = React.Children.toArray(childrenProp);
  return (
    <div>
      {children.map((child: *, idx: number): * => {
        const notLast = idx !== children.length - 1;
        return (
          <Margin right={notLast ? horizontal : undefined} bottom={notLast ? vertical : undefined} key={idx}>
            {child}
          </Margin>
        );
      })}
    </div>
  );
}
