/**
 * Replacements configuration for the style variable replacement loader
 */
/* eslint-disable flowtype/require-parameter-type,flowtype/require-return-type, flowtype/require-valid-file-annotation */
const _ = require('lodash');

const NUMBERS = /^\d+(\.\d+)$/;

// {backgroundColors: string[], foregroundColors: string[]}
module.exports = ({backgroundColors, foregroundColors}) => {
  return [
    {
      pattern: /__FOREGROUND_COLORS__/,
      replacement: () => {
        return foregroundColors.map((colorName) => `.color-${colorName} { color: var(--${colorName}); }`).join('\n')
      }
    },
    {
      pattern: /__BACKGROUND_COLORS__/,
      replacement: () => {
        return backgroundColors.map((colorName) => `.background-color-${colorName} { background-color: var(--${colorName}); }`).join('\n')
      }
    },
  ];
};
