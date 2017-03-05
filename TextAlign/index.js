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
}: {
  align: TAlignment,
  children?: React.Element<*>,
}): * {
  console.log(styles);
  const className = classnames(
    getResponsiveClassNames(align, 'text-align', styles),
  );

  return (
    <ClassNameContainer {...{className}}>
      {children}
    </ClassNameContainer>
  );
}

TextAlign.inheritsClassNames = true;
