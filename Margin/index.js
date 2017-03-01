// @flow
import React from 'react';

import ClassNameContainer from '../ClassNameContainer';
import type {TResponsive, TSpacing} from '../types';
import getResponsiveClassNames from '../utils/getResponsiveClassNames';
import classnames from '../utils/native-classnames';

import styles from './styles';

type TNumber = TResponsive<-1 | 'half' | 0 | 1 | 2 | 3 | 4 | 6 | 8>;

export default function Margin({
  all,
  vertical,
  horizontal,
  top,
  right,
  bottom,
  left,
  children,
}: TSpacing<TNumber> & {
  children?: React.Element<*>,
}): * {
  const className = classnames(
    getResponsiveClassNames(top || vertical || all, 'margin-top', styles),
    getResponsiveClassNames(right || horizontal || all, 'margin-right', styles),
    getResponsiveClassNames(bottom || vertical || all, 'margin-bottom', styles),
    getResponsiveClassNames(left || horizontal || all, 'margin-left', styles),
  );

  return (
    <ClassNameContainer {...{className}}>
      {children}
    </ClassNameContainer>
  );
}

Margin.inheritsClassNames = true;
