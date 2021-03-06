// @flow
import React from 'react';
import {View as ViewComponent} from 'react-native';

import classnames from '../utils/native-classnames';

type TProps = {
  className?: Object,
  style?: Object,
};

export default class View extends React.Component {
  props: TProps;

  render(): React.Element<any> {
    let {className, style, ...props} = this.props; // eslint-disable-line
    if (style && className) {
      style = classnames(className, style);
    }
    return <ViewComponent {...props} style={style || className} />;
  }

  setNativeProps(nativeProps: *): void {
    if (this._root) {
      (this._root: any).setNativeProps(nativeProps);
    }
  }
}
