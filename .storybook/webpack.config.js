const w = require('mesaic-webpack');

const defaultStyles = require('../defaultStyles');
const createReplacements = require('../utils/createReplacements');

const styles = Object.assign({}, defaultStyles, {
  colors: {
    accent: '#E91E63',
    grayDark: '#333',
    gray: '#777',
    text: '#222',
    textOnAccent: '#fff',
    textOnGray: '#aaa',
  },
});

const replacements = createReplacements(styles);

module.exports = (webpackConfig) => {
  // https://github.com/webpack-contrib/css-loader/issues/447
  webpackConfig.node = {
    fs: 'empty',
  };

  webpackConfig.module.rules = [];

  [
    w.resolveLoader(),
    w.extensions(),
    w.devtool(),

    w.babelRule({}),
    w.fileRule(),
    w.styleRules({replacements, production: process.env.NODE_ENV === 'production', cssFileName: 'main.css'}),
  ].forEach(mutate => mutate(webpackConfig));

  return webpackConfig;
};
