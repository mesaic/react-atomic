const w = require('mesaic-webpack');
const createReplacements = require('../utils/createReplacements');

const defaultStyles = require('../defaultStyles');

const styles = Object.assign({}, defaultStyles, {
  colors: {
    accent: '#E91E63',
    grayDark: '#333',
    gray: '#777',
    text: '#222',
    textOnAccent: '#fff',
    textOnGray: '#aaa',
  }
});

const replacements = createReplacements(styles);

module.exports = (storybookConfig) => {
  storybookConfig.module.loaders = [];

  [
    w.resolveLoader(),
    w.extensions(),
    w.devtool(),

    w.lessModuleSVRLoader({replacements, production: process.env.NODE_ENV === 'production', cssFileName: 'main.css'}),
    w.babelLoader(),
    w.fileLoader(),
    w.jsonLoader(),
  ].forEach(mutate => mutate(storybookConfig));

  return storybookConfig;
};
