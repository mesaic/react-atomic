// @flow
import React, {PropTypes} from 'react';

import classnames from '../utils/native-classnames';

import View from '../View';

const dethunk = (fn, ...args) => (typeof fn === 'function') ? fn(...args) : fn;

export default class ClassNameContainer extends React.Component {
  props: {|
    className: any,
    children?: any,
  |}

  static contextTypes = {
    parentClassNames: PropTypes.any,
  };

  static childContextTypes = {
    parentClassNames: PropTypes.any,
  };

  getChildContext(): * {
    const {children, className} = this.props;

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
