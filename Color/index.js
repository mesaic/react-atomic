// @flow
import React from 'react';
import classnames from '../utils/native-classnames';
import getResponsiveClassNames from '../utils/getResponsiveClassNames';
import ClassNameContainer from '../ClassNameContainer';

import styles from './styles';

export default function Color({
  color,
  children,
}: {color: string, children: React.Element<*, *, *>}): React.Element<any> {
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
Color.propTypes = {
  color: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};
