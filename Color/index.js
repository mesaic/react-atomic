// @flow
import React from 'react';
import classnames from '../utils/native-classnames';
import styles from './styles';

// import getResponsiveClassNames from 'mesaic-react-utils/getResponsiveClassNames';
const getResponsiveClassNames = () => {};
// import ClassNameContainer from 'mesaic-react-utils/ClassNameContainer';
const ClassNameContainer = ({children}) => children;


export default function Color({
  color,
  children,
}: *): React.Element<any> {
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
