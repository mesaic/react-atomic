// @flow
// flow-disable-next-line
import Color from 'color';
// flow-disable-next-line
import invariant from 'invariant';

type TContext = {
  config: (key: string, defaultValue: any) => ?string,
};


const DYNAMIC_FALLBACKS = {
  mapWaterGeometryColor: (context: TContext): ?string => {
    const color = getColor('secondaryColorLight', context);
    if (!color) {
      return null;
    } else {
      return Color(color).lighten(1.85).saturate(3.25).hexString();
    }
  },

  mapWaterLabelColor: (context: TContext): ?string => {
    const color = getColor('secondaryColorLight', context);
    if (!color) {
      return null;
    } else {
      return Color(color).lightness(0).saturate(3.25).hexString();
    }
  },
};

const STATIC_FALLBACKS = {
  accentColor: 'primaryColor',
  primaryTextColor: 'grayLight',
  primaryLightTextColor: 'baseColor',
  primaryDarkTextColor: 'grayLight',
  secondaryTextColor: 'grayLight',
  secondaryLightTextColor: 'grayLight',
  secondaryDarkTextColor: 'grayLight',
  tertiaryTextColor: 'grayLight',
  tertiaryLightTextColor: 'baseColor',
  tertiaryDarkTextColor: 'grayLight',
  grayTextColor: 'baseColor',
  grayLightTextColor: 'baseColor',
  grayDarkTextColor: 'grayLight',
};

export default function getColor(colorName: string, context: TContext): ?string {
  invariant(colorName, 'Missing argument `colorName`!');

  const color = context.config(`styles.${colorName}`);
  if (color) {
    return color;
  } else {
    const staticFallbackColorName = STATIC_FALLBACKS[colorName];
    if (staticFallbackColorName) {
      const colorFromStaticFallback = context.config(`styles.${staticFallbackColorName}`);
      if (colorFromStaticFallback) {
        return colorFromStaticFallback;
      }
    } else {
      const dynamicFallbackFn = DYNAMIC_FALLBACKS[colorName];
      if (dynamicFallbackFn) {
        const dynamicResult = dynamicFallbackFn(context);
        if (dynamicResult) {
          return dynamicResult;
        }
      }
    }
  }
  console.warn(`Color '${colorName}' was not found in config.`); // eslint-disable-line no-console
  return null;
}
