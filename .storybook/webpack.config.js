const createStyleVariablesReplacementLoader = require('../utils/createStyleVariablesReplacementLoader');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const defaultStyles = require('../defaultStyles');
const autoprefixer = require('autoprefixer');

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

module.exports = (config) => {
  config.resolve.extensions = ['', '.js', '.css', '.less', '.less.module', '.json'];

  const styleVariablesReplacementLoader = createStyleVariablesReplacementLoader(styles, styles.colors);
  const lessLoader = `less-loader?importLoader=${styleVariablesReplacementLoader}!${styleVariablesReplacementLoader}`;

  const cssModulesOptions = '&localIdentName=[local]_[hash:base64:3]';

  config.module.loaders.push({
    test: /\.less\.module$/,
    loader: `style-loader!css-loader?modules${cssModulesOptions}!postcss-loader!${lessLoader}`,
  })

  config.module.loaders.push({
    test: /\.css$/,
    loader: `style-loader!css-loader!postcss-loader`,
  })

  config.plugins.push(new StringReplacePlugin());
  config.postcss = [
    autoprefixer({browsers: [
      '> 5%',
      'last 3 iOS versions',
      'last 2 versions',
    ]}),
  ];

  return config;
}
