// @flow
export type TResponsive<T> = {|
  mobile?: T,
  mobileLarge?: T,
  tablet?: T,
  desktop?: T,
|} | T;

export type TSpacing<T> = {
  all?: T,
  vertical?: T,
  horizontal?: T,
  top?: T,
  right?: T,
  bottom?: T,
  left?: T,
};

export type TNumber = TResponsive<-1 | 'half' | 0 | 1 | 2 | 3 | 4 | 6 | 8>;

export type TAlignment = TResponsive<'left' | 'right' | 'center'>;
