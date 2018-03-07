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

## Contract
This package expects your consuming environment to be setup in a particular way.
(1) Variable names passed into `createReplacements` are expected to be available as css vars;
you should include these in your css somewhere. Example:
`createReplacements({foregroundColors: ['baseColor', 'secondaryTextColor'], backgroundColors: ['primaryColor', 'secondaryColor']})`
implies that the following css variable definitions should exist in your consumer CSS:
```
:root {
  /* arbitrary values chosen here */
  --baseColor: #333;
  --secondaryTextColor: #777;
  --primaryColor: blue;
  --secondaryColor: red;
}
```

(2) The following

## Documentation

To run that demo on your own computer:
* Clone this repository
* `npm install`
* `npm run storybook`
* Visit http://localhost:9001/

[package-url]: https://npmjs.org/package/react-atomic
[license-image]: http://img.shields.io/npm/l/react-dates.svg
[license-url]: LICENSE
