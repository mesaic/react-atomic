import React, {PropTypes} from 'react';
import classnames from '../utils/native-classnames';

import getResponsiveClassNames from '../utils/getResponsiveClassNames';
import ClassNameContainer from '../ClassNameContainer';

import styles from './styles';

export default function BackgroundColor({
  color,
  children,
}) {
  const className = classnames(
    getResponsiveClassNames(color, 'background-color', styles),
  );

  return (
    <ClassNameContainer {...{className}}>
      {children}
    </ClassNameContainer>
  )
}

BackgroundColor.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

BackgroundColor.inheritsClassNames = true;
