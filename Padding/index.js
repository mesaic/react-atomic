// @flow
import React from 'react';

import ClassNameContainer from '../ClassNameContainer';
import type {TResponsive, TSpacing} from '../types';
import getResponsiveClassNames from '../utils/getResponsiveClassNames';
import classnames from '../utils/native-classnames';
import responsivePropType from '../utils/responsivePropType';

import styles from './styles';

type TNumber = TResponsive<'half' | 0 | 1 | 2 | 3 | 4 | 6 | 8>;

export default function Padding({
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
    styles.base,
    getResponsiveClassNames(top || vertical || all, 'padding-top', styles),
    getResponsiveClassNames(right || horizontal || all, 'padding-right', styles),
    getResponsiveClassNames(bottom || vertical || all, 'padding-bottom', styles),
    getResponsiveClassNames(left || horizontal || all, 'padding-left', styles),
  );

  return (
    <ClassNameContainer {...{className}}>
      {children}
    </ClassNameContainer>
  );
}

Padding.inheritsClassNames = true;
