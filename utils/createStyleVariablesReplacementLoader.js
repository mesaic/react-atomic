const StringReplacePlugin = require('string-replace-webpack-plugin');
const _ = require('lodash');

const NUMBERS = /^\d+(\.\d+)$/;

/* eslint-disable no-unused-vars,no-eval,no-console */
function customEval(code, styles) {
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
    const style = (path, def) => _.get(styles, path, def);
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

module.exports = (styles, colors) => StringReplacePlugin.replace({
  replacements: [
    {
      pattern: /\{\{(.*?)\}\}/g,
      replacement: (match, content) => customEval(content, styles),
    },
    {
      pattern: /%%([\w\.]+)%%/g, // eslint-disable-line
      replacement(match, path) {
        const value = _.get(styles, path, undefined);

        if (value === undefined) {
          const msg = `Cannot find variant replacement for %%${path}%% in ${this.resourcePath}. Styles: ${JSON.stringify(styles, null, 2)}`;
          console.error(msg);
          throw new Error(msg);
        }

        return value;
      },
    },
    {
      pattern: /__LESS_COLORS__/g,
      replacement() {
        return Object.keys(colors).map((colorName) => {
          const colorValue = colors[colorName];
          return `@${colorName}: ${colorValue};`;
        }).join('\n');
      },
    },
    {
      pattern: /__LESS_COLOR_GENERATORS__/g,
      replacement() {
        return Object.keys(colors).map((colorName) => {
          return `.generate(color, ~"${colorName}");`;
        }).join('\n');
      },
    },
    {
      pattern: /__LESS_BACKGROUND_COLOR_GENERATORS__/g,
      replacement() {
        return Object.keys(colors).map((colorName) => {
          return `.generate(background-color, ~"${colorName}");`;
        }).join('\n');
      },
    },
  ],
});
