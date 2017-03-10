// @flow
import React from 'react';

import ClassNameContainer from '../ClassNameContainer';
import type {TSpacing, TNumber} from '../types';
import getResponsiveClassNames from '../utils/getResponsiveClassNames';
import classnames from '../utils/native-classnames';

import styles from './styles';

export default function Margin(
  {
    all,
    vertical,
    horizontal,
    top,
    right,
    bottom,
    left,
    children,
    inject,
  }: TSpacing<TNumber> & {
    children?: React.Element<*>,
    inject?: ?boolean,
  },
): * {
  const className = classnames(
    getResponsiveClassNames(top || vertical || all, 'margin-top', styles),
    getResponsiveClassNames(right || horizontal || all, 'margin-right', styles),
    getResponsiveClassNames(bottom || vertical || all, 'margin-bottom', styles),
    getResponsiveClassNames(left || horizontal || all, 'margin-left', styles),
  );

  return (
    <ClassNameContainer {...{className, inject}}>
      {children}
    </ClassNameContainer>
  );
}

Margin.inheritsClassNames = true;

