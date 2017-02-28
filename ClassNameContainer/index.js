// @flow
import React from 'react';

import View from '../View';
import classnames from '../utils/native-classnames';

const dethunk = (fn, ...args) => (typeof fn === 'function') ? fn(...args) : fn;

export default class ClassNameContainer extends React.Component {
  props: {|
    className: string,
    children?: React.Element<*>,
  |};

  static contextTypes = {
    parentClassNames: React.PropTypes.string,
  };

  static childContextTypes = {
    parentClassNames: React.PropTypes.string,
  };

  getChildContext(): * {
    const {
      className,
      children,
    } = this.props;

    if (children && !children.length && children.type && dethunk(children.type.inheritsClassNames, children)) {
      return {
        parentClassNames: classnames(this.context.parentClassNames, className),
      };
    } else {
      return {parentClassNames: null};
    }
  }

  render(): * {
    const {
      className,
      children,
    } = this.props;

    const {
      parentClassNames = [],
    } = this.context;

    if (children && !children.length && children.type && dethunk(children.type.inheritsClassNames, children)) {
      return children;
    } else {
      const mergedClassName = classnames(parentClassNames, className);
      return (
        <View className={mergedClassName}>
          {children}
        </View>
      );
    }
  }

  static inheritsClassNames = true;
}
