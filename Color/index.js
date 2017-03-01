// @flow
import React from 'react';

import ClassNameContainer from '../ClassNameContainer';
import getResponsiveClassNames from '../utils/getResponsiveClassNames';
import classnames from '../utils/native-classnames';

import styles from './styles';

export default function Color({
  color,
  children,
}: {
  color?: string,
  children?: React.Element<*>,
}): * {
  const className = classnames(
    getResponsiveClassNames(color, 'color', styles),
  );

  return (
    <ClassNameContainer {...{className}}>
      {children}
    </ClassNameContainer>
  );
}

Color.inheritsClassNames = true;
