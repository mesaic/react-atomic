/**
 * Replacements configuration for the style variable replacement loader
 */
/* eslint-disable flowtype/require-parameter-type,flowtype/require-return-type, flowtype/require-valid-file-annotation */
const _ = require('lodash');

const NUMBERS = /^\d+(\.\d+)$/;

/* eslint-disable no-unused-vars,no-eval,no-console */
function customEval(code, styles) {
  console.info('[createReplacements.js] code: ', code);
  try {
    const fonts = () => (styles.fonts || []).map((font) => {
      const srcs = [
        ...(font.woff2 ? [`url('${font.woff2}') format('woff2')`] : []),
        ...(font.woff ? [`url('${font.woff}') format('woff')`] : []),
      ];

      return `
      @font-face {
        font-family: '${font.familyName}';
        src: ${srcs.join(',')};
        font-weight: ${font.weight};
      }
      `;
    }).join('\n');
    const style = (path, def) => {
      const result = _.get(styles, path, def);
      if (typeof result === 'undefined') {
        throw new Error(`styles.${path} could not be found.`);
      }
      return result;
    };
    const withUnit = (value, unit) => (typeof value === 'number' || NUMBERS.test(value)) ? `${String(value)}${unit}` : value;
    const px = (value) => withUnit(value, 'px');
    const percent = (value) => withUnit(value, '%');
    const em = (value) => withUnit(value, 'em');

    let __result;
    eval(`__result = (${code});`);
    return String(__result);
  } catch (err) {
    console.error('error in eval', err);
    throw err;
  }
}

module.exports = (styles) => {
  if (!styles) {
    throw new Error('Pass `styles` as first argument.');
  }
  if (!styles.colors) {
    throw new Error('Styles should contain a `colors` key.');
  }
  return [
    {
      pattern: /\{\{((.|\n)*?)\}\}/g,
      replacement: (match, content) => customEval(content, styles),
    },
  ];
};
