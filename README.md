# react-atomic
Atomic CSS inspired React components that don't bloat your DOM.

[Documentation via React Storybook](http://react-atomic.netlify.com/)

### In
```js
  <Padding all={2}>
    <BackgroundColor color='primary'>
      <Color color='textColorOnPrimary'>
        Foo
      </Color>
    </BackgroundColor>
  </Padding>
```

### Out
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



