// @flow
import React from 'react';

import ClassNameContainer from '../ClassNameContainer';
import type {TAlignment} from '../types';
import getResponsiveClassNames from '../utils/getResponsiveClassNames';
import classnames from '../utils/native-classnames';

import styles from './styles';


export default function TextAlign({
  align,
  children,
  inject,
}: {
  align: TAlignment,
  children?: React.Element<*>,
  inject?: boolean,
}): * {
  const className = classnames(
    getResponsiveClassNames(align, 'text-align', styles),
  );

  return (
    <ClassNameContainer {...{className, inject}}>
      {children}
    </ClassNameContainer>
  );
}
