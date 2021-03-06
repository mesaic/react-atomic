// @flow
import React from 'react';

import ClassNameContainer from '../ClassNameContainer';
import type {TResponsive} from '../types';
import getResponsiveClassNames from '../utils/getResponsiveClassNames';
import classnames from '../utils/native-classnames';

import styles from './styles';

type TAlign = TResponsive<'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'>;

export default function Flex({
  direction,
  justifyContent,
  alignItems,
  wrap: wrapProp,
  className: classNameProp,
  children,
  inject,
}: {
  direction?: TResponsive<'column' | 'row' | 'column-reverse' | 'row-reverse'>,
  justifyContent?: TResponsive<'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'>,
  alignItems?: TAlign,
  wrap?: TResponsive<true | 'wrap' | 'nowrap' | 'wrap-reverse'>,
  className?: string,
  children?: React.Element<*>,
  inject?: ?boolean,
}): * {
  const wrap = wrapProp === true ? 'wrap' : wrapProp;

  const className = classnames(
    styles.Flex,
    classNameProp,
    getResponsiveClassNames(wrap, 'flex-wrap', styles),
    getResponsiveClassNames(direction, 'flex-direction', styles),
    getResponsiveClassNames(justifyContent, 'justify-content', styles),
    getResponsiveClassNames(alignItems, 'align-items', styles),
  );

  return (
    <ClassNameContainer {...{className, inject}}>
      {children}
    </ClassNameContainer>
  );
}

Flex.inheritsClassNames = true;

type TGrowShrink = TResponsive<boolean | 0 | 1 | 2 | 3 | 4>;

function Child({
  grow: grow_,
  shrink: shrink_,
  // flow-disable-next-line
  basis: basis_ = true,
  alignSelf,
  children,
}: {
  grow?: TGrowShrink,
  shrink?: TGrowShrink,
  basis: TResponsive<boolean>,
  alignSelf?: TGrowShrink,
  children?: React.Element<*>,
}): * {
  const grow = typeof grow_ === 'boolean' ? (grow_ ? 1 : 0) : grow_;
  const shrink = typeof shrink_ === 'boolean' ? (shrink_ ? 1 : 0) : shrink_;
  const basis = typeof basis_ === 'undefined' ? (!grow && !shrink) : basis_;

  const className = classnames(
    styles.FlexChild,
    getResponsiveClassNames(basis, 'flex-basis', styles),
    getResponsiveClassNames(grow, 'flex-grow', styles),
    getResponsiveClassNames(shrink, 'flex-shrink', styles),
    getResponsiveClassNames(alignSelf, 'align-self', styles),
  );

  return (
    <ClassNameContainer {...{className}}>
      {children}
    </ClassNameContainer>
  );
}

Child.defaultProps = {
  shrink: true,
};

Child.inheritsClassNames = true;

function Column({
  size,
  children,
}: {
  size: TResponsive<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>,
  children?: React.Element<*>,
}): * {
  const className = classnames(
    styles.child,
    getResponsiveClassNames(size, 'flex', styles),
  );

  return (
    <ClassNameContainer {...{className}}>
      {children}
    </ClassNameContainer>
  );
}

Column.inheritsClassNames = true;

Flex.Child = Child;
Flex.Column = Column;
Flex.Item = () => console.error('You tried to use `Flex.Item`, but it is called `Flex.Child`.'); // eslint-disable-line
