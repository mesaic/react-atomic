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

## Live Playground

For examples of the components go to http://react-atomic.netlify.com/.

OR

To run that demo on your own computer:
* Clone this repository
* `npm install`
* `npm run storybook`
* Visit http://localhost:9001/

## Getting Started
#### Install dependencies
Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=react-atomic;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save react-atomic ...
  ```

[package-url]: https://npmjs.org/package/react-atomic
[license-image]: http://img.shields.io/npm/l/react-dates.svg
[license-url]: LICENSE
