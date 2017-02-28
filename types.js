// @flow
export type TResponsive<T> = {|
  mobile?: T,
  mobileLarge?: T,
  tablet?: T,
  desktop?: T,
|} | T;

export type TSpacing<T> = {|
  all?: T,
  vertical?: T,
  horizontal?: T,
  top?: T,
  right?: T,
  bottom?: T,
  left?: T,
|};
