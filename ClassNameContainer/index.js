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

    // It is a component implementing ClassNameContainer
    if (children && !children.length && children.type && dethunk(children.type.inheritsClassNames, children)) {
      return children;
    } else {
      const mergedClassName = classnames(parentClassNames, className);
      // It is an array of React elements
      if (children && React.Children.count(children) > 1) {
        return (
          <View className={mergedClassName}>
            {children}
          </View>
        );
      // String child
      } else if (children && typeof children === 'string') {
        return (
          <span className={mergedClassName}>
            {children}
          </span>
        );
      // Single child
      } else if (children && React.Children.count(children) === 1) {
        return React.cloneElement(children, {className: classnames(mergedClassName, children.props.className)});
      // No child
      } else {
        return null;
      }
    }
  }

  static inheritsClassNames = true;
}
