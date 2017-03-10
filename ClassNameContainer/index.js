// @flow
import React from 'react';

import View from '../View';
import classnames from '../utils/native-classnames';

const dethunk = (fn, ...args) => typeof fn === 'function' ? fn(...args) : fn;

export default class ClassNameContainer extends React.Component {
  props: {|
    className: string,
    children?: React.Element<*>,
    inject?: ?boolean,
  |};

  static contextTypes = {
    parentClassNames: React.PropTypes.string,
    inject: React.PropTypes.bool,
  };

  static childContextTypes = {
    parentClassNames: React.PropTypes.string,
    inject: React.PropTypes.bool,
  };

  getChildContext(): * {
    const {
      className,
      children,
      inject,
    } = this.props;

    if (
      children &&
      !children.length &&
      children.type &&
      dethunk(children.type.inheritsClassNames, children)
    ) {
      return {
        parentClassNames: classnames(this.context.parentClassNames, className),
        // If one of the atomic components provides a `inject` flag, the accumulated classnames
        // will be "injected" into the leaf component, i.e merged with the classnames already set on the leaf component
        inject: inject !== undefined ? inject : this.context.inject,
      };
    } else {
      return {parentClassNames: null};
    }
  }

  render(): * {
    const {
      className,
      children,
      inject: injectFromProp,
    } = this.props;

    const {
      parentClassNames = [],
      inject: injectFromContext,
    } = this.context;

    const inject = injectFromProp !== undefined ? injectFromProp : injectFromContext;

    // It is a component implementing ClassNameContainer
    if (
      children &&
      !children.length &&
      children.type &&
      dethunk(children.type.inheritsClassNames, children)
    ) {
      return children;
    } else {
      const mergedClassName = classnames(parentClassNames, className);
      // It is an array of React elements
      if ((children && React.Children.count(children) > 1) || !inject) {
        return (
          <View className={mergedClassName}>
            {children}
          </View>
        );
        // String child
      } else if (children && typeof children === 'string' && inject) {
        return (
          <span className={mergedClassName}>
            {children}
          </span>
        );
        // Single child
      } else if ((children && React.Children.count(children)) === 1 && inject) {
        // flow-disable-next-line
        return React.cloneElement(children, {
          className: children && children.props
            ? classnames(children.props.className, mergedClassName)
            : mergedClassName,
        });
        // No child
      } else {
        return null;
      }
    }
  }

  static inheritsClassNames = true;
}
