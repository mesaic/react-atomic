// @flow
import React, {PropTypes} from 'react';
import classnames from '../utils/native-classnames';

import getResponsiveClassNames from '../utils/getResponsiveClassNames';
import responsivePropType from '../utils/responsivePropType';
import ClassNameContainer from '../ClassNameContainer';

import styles from './styles';

export default function Padding({
  all,
  vertical = all,
  horizontal = all,
  top = vertical,
  right = horizontal,
  bottom = vertical,
  left = horizontal,
  children,
}: *): * {
  const className = classnames(
    styles.base,
    getResponsiveClassNames(left, 'padding-left', styles),
    getResponsiveClassNames(right, 'padding-right', styles),
    getResponsiveClassNames(top, 'padding-top', styles),
    getResponsiveClassNames(bottom, 'padding-bottom', styles),
  );

  return (
    <ClassNameContainer {...{className}}>
      {children}
    </ClassNameContainer>
  );
}

const numberType = responsivePropType(PropTypes.oneOf(['half', 0, 1, 2, 3, 4, 6, 8]));

Padding.propTypes = {
  children: PropTypes.node,

  all: numberType,
  vertical: numberType,
  horizontal: numberType,
  left: numberType,
  top: numberType,
  bottom: numberType,
  right: numberType,
};

Padding.inheritsClassNames = true;
