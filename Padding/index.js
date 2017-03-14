// @flow
import React from 'react';

import ClassNameContainer from '../ClassNameContainer';
import type {TResponsive, TSpacing} from '../types';
import getResponsiveClassNames from '../utils/getResponsiveClassNames';
import classnames from '../utils/native-classnames';

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
  inject,
}: TSpacing<TNumber> & {
  children?: React.Element<*>,
  inject?: ?boolean,
}): * {
  const className = classnames(
    getResponsiveClassNames(top !== undefined ? top : vertical !== undefined ? vertical : all, 'padding-top', styles),
    getResponsiveClassNames(right !== undefined ? right : horizontal !== undefined ? horizontal : all, 'padding-right', styles),
    getResponsiveClassNames(bottom !== undefined ? bottom : vertical !== undefined ? vertical : all, 'padding-bottom', styles),
    getResponsiveClassNames(left !== undefined ? left : horizontal !== undefined ? horizontal : all, 'padding-left', styles),
  );

  return (
    <ClassNameContainer {...{className, inject}}>
      {children}
    </ClassNameContainer>
  );
}

Padding.inheritsClassNames = true;
