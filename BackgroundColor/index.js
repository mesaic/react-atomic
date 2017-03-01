// @flow
import React from 'react';

import ClassNameContainer from '../ClassNameContainer';
import getResponsiveClassNames from '../utils/getResponsiveClassNames';
import classnames from '../utils/native-classnames';

import styles from './styles';

export default function BackgroundColor({
  color,
  children,
}: {
  color?: string,
  children?: React.Element<*>,
}): * {
  if (!color) {
    return children;
  }

  const className = classnames(
    getResponsiveClassNames(color, 'background-color', styles),
  );

  return (
    <ClassNameContainer {...{className}}>
      {children}
    </ClassNameContainer>
  );
}

BackgroundColor.inheritsClassNames = true;
