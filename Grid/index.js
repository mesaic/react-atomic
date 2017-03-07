// @flow
import React from 'react';

import Flex from '../Flex';
import Margin from '../Margin';

const nextHigher = {
  never: 'mobile',
  mobile: 'mobileLarge',
  mobileLarge: 'tablet',
  tablet: 'desktop',
  desktop: undefined,
};

export default function Grid({
  children,
  weights,
  breakAt = 'mobile',
  spacing = 1,
}: {
  breakAt?: 'never' | 'mobile' | 'mobileLarge' | 'tablet' | 'desktop',
  children?: any,
  weights?: any,
  spacing?: any, // 'half', or 0..8
}): * {
  const breakEverywhere = (breakAt === 'desktop');
  const noBreakingAnymore = nextHigher[breakAt] || 'mobile';

  const childCount = React.Children.count(children);

  return (
    <Flex direction={{mobile: 'column', ...(breakEverywhere ? {} : {[noBreakingAnymore]: 'row'})}}>
      {React.Children.map(children, (child: *, i: *): * => {
        if (!child) {
          return null;
        }

        const last = i === childCount - 1;
        return (
          <Margin
            right={last ? undefined : {mobile: 0, ...(breakEverywhere ? {} : {[noBreakingAnymore]: spacing})}}
            bottom={last ? undefined : {mobile: spacing, ...(breakEverywhere ? {} : {[noBreakingAnymore]: 0})}}
            key={child.key || i}>
            <Flex.Child
              basis={{mobile: true, ...(breakEverywhere ? {} : {[noBreakingAnymore]: false})}}
              grow={(weights && weights[i] !== undefined) ? weights[i] : 1}>
              {child}
            </Flex.Child>
          </Margin>
        );
      })}
    </Flex>
  );
}

Grid.inheritsClassNames = true;
