// @flow
import React from 'react';

import ClassNameContainer from '../ClassNameContainer';
import getResponsiveClassNames from '../utils/getResponsiveClassNames';
import classnames from '../utils/native-classnames';

import styles from './styles';

export default function BackgroundColor({
  color,
  children,
  inject,
}: {
  color?: ?string,
  children?: React.Element<*>,
  inject?: ?boolean,
}): * {
  const className = !color ? undefined : classnames(
    getResponsiveClassNames(color, 'background-color', styles),
  );

  return (
    <ClassNameContainer {...{className, inject}}>
      {children}
    </ClassNameContainer>
  );
}

BackgroundColor.inheritsClassNames = true;
