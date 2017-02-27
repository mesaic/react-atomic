const createStyleVariablesReplacementLoader = require('../utils/createStyleVariablesReplacementLoader');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const defaultStyles = require('../defaultStyles');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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

  const wrapExtractTextStyle = (loaders) => ExtractTextPlugin.extract('style-loader', loaders, {publicPath: ''});

  config.module.loaders.push({
    test: /\.less\.module$/,
    loader: wrapExtractTextStyle(`css-loader?modules${cssModulesOptions}!postcss-loader!${lessLoader}`),
  })

  config.module.loaders.push({
    test: /\.css$/,
    loader: wrapExtractTextStyle(`css-loader!postcss-loader`),
  })

  config.plugins.push(new StringReplacePlugin());
  config.plugins.push(
    new ExtractTextPlugin('main.css', {allChunks: true, disable: process.env.NODE_ENV !== 'production'})
  )
  config.postcss = [
    autoprefixer({browsers: [
      '> 5%',
      'last 3 iOS versions',
      'last 2 versions',
    ]}),
  ];

  return config;
}
