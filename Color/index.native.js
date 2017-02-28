// @flow
import React, {Component, PropTypes} from 'react';

import View from '../View';

export default class Color extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
  };

  static childContextTypes = {
    color: PropTypes.string,
  };

  getChildContext(): * {
    return {
      color: this.props.color,
    };
  }

  render(): React.Element<any> {
    return (
      <View>
        {this.props.children}
      </View>
    );
  }

  static inheritsClassNames = (instance) => instance.props.children.inheritsClassNames;
}
