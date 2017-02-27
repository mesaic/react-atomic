// @flow
import {StyleSheet} from 'react-native';
import _transform from 'lodash/transform';

const gridSize = 16;

const SIZES = {half: 0.5, '0': 0, '1': '1', '2': 2, '3': 3, '4': 4, '6': 6, '8': 8}; // eslint-disable-line

const generateSizes = (classBaseName: string, propertyName: string): Object => {
  return _transform(SIZES, (o: *, sizeValue: *, sizeName: *): void => {
    const className = `${classBaseName}_${sizeName}`;
    o[className] = {[propertyName]: sizeValue * gridSize};
  }, {});
};

const styles = {
  ...(generateSizes('padding-left', 'paddingLeft')),
  ...(generateSizes('padding-right', 'paddingRight')),
  ...(generateSizes('padding-bottom', 'paddingBottom')),
  ...(generateSizes('padding-top', 'paddingTop')),
};

export default StyleSheet.create(styles);
