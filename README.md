# <img src="https://cloud.githubusercontent.com/assets/3755413/23356778/685a16fc-fcdb-11e6-9991-26b7c5125d2f.png" width="200">

[![License][license-image]][license-url]

> Atomic CSS inspired React components that don't bloat your DOM.


#### In
```js
  <Padding all={2}>
    <BackgroundColor color='primary'>
      <Color color='textColorOnPrimary'>
        Foo
      </Color>
    </BackgroundColor>
  </Padding>
```

#### Out
```
<div class="
  padding-left-2_3uQ 
  padding-right-2_3jc 
  padding-top-2_16R 
  padding-bottom-2_3Fi 
  background-color-accent_JJQ 
  color-textColorOnPrimary-_4ij
">Foo</div>
```

## Documentation

For examples and documentation of the components go to http://react-atomic.netlify.com/.

OR

To run that demo on your own computer:
* Clone this repository
* `npm install`
* `npm run storybook`
* Visit http://localhost:9001/

## Setup

- Ensure `peerDependencies` are installed
- Setup webpack to compile this library and its styles by adding the following setup to your webpack configuration:

    ```js
    const StringReplacePlugin = require('string-replace-webpack-plugin');
    const autoprefixer = require('autoprefixer');
    const ExtractTextPlugin = require('extract-text-webpack-plugin');

    const createStyleVariablesReplacementLoader = require('react-atomic/utils/createStyleVariablesReplacementLoader');
    const defaultStyles = require('react-atomic/defaultStyles');

    // You can override the default variables like so. Look at the `defaultStyles` file to see which variables exist
    const styles = Object.assign({}, defaultStyles, {
      colors: {
        // Define your color variables here, then use them in `Color` and `BackgroundColor` components (pass in the color key into the `color` prop
        // Example:
        accent: '#E91E63',
        gray: '#777',
        text: '#222',
      }
    });

    // This returns an instance of StringReplaceWebpackPlugin 
    // (https://www.npmjs.com/package/string-replace-webpack-plugin). 
    // It will replace placeholder strings in the libraries *.less.module-files 
    // with the variables you supply to it
    const styleVariablesReplacementLoader = createStyleVariablesReplacementLoader(styles, styles.colors);

    // Use the fork of less-loader specified in peerDependencies 
    // to be able to configure the less-loader like so:
    const lessLoader = `less-loader?importLoader=${styleVariablesReplacementLoader}!${styleVariablesReplacementLoader}`;

    const cssModulesOptions = '&localIdentName=[local]_[hash:base64:3]';

    const wrapExtractTextStyle = (loaders) => ExtractTextPlugin.extract('style-loader', loaders, {publicPath: ''});

    const reactAtomicLoaders = [
        {
          test: /\.less\.module$/,
          include: /node_modules\/react-atomic/,
          loader: wrapExtractTextStyle(`css-loader?modules${cssModulesOptions}!postcss-loader!${lessLoader}`),
        },  
        {
        test: /\.js$/,
          include: /node_modules\/react-atomic/,
          // Your babelrc should contain 
          // { "plugins": ["transform-runtime"], "presets": [ "es2015", "stage-0", "react"] }
          loader: 'babel-loader',
        },
    ]

    // Now concat your webpack `loaders` array with `reactAtomicLoaders`. :)
    ```

- Add `.less.module` and `.js` to your webpack config entry `resolve.extensions`
- Add `new StringReplacePlugin()` to your webpack `plugins` array
- Ensure your webpack plugins array has a `new ExtractTextPlugin(...)` entry
- Add a `postcss-loader` configuration to your webpack config, for example

    ```js
      {
        // other webpack config ...
        postcss: [autoprefixer({browsers: ['> 5%', 'last 3 iOS versions', 'last 2 versions']})]},
      }
    ```

[package-url]: https://npmjs.org/package/react-atomic
[license-image]: http://img.shields.io/npm/l/react-dates.svg
[license-url]: LICENSE
