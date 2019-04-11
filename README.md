# react-rellax
[Live Demo](https://open.nelo.is/react-rellax)

React Parallax component using [Rellax.js](https://github.com/dixonandmoe/rellax).

## Installation
```
npm i --save react-rellax
```

## Notes
 - All props are _optional_.
 - It's common to tweak `speed` and `percentage` to suit your design requirements.
 - All other props not mentioned below (_e.g._ `className`, `style`, etc.) are passed down as usual.

## Props
 - `as` _(str)_ : Tag to use as a wrapper. Default: `div`
 - `centered` _(bool)_ : Centers the component on the viewport
 - `horizontal` _(bool)_ : Horizontal scrolling
 - `onMove` _(func)_ : Callback function which accepts an object `{x: int, y: int}`
 - `percentage` _(num)_ : Initial scroll percentage
 - `speed` _(int)_ : Integer >= -10 && <=10 determines scroll speed. Default: `-2`
 - `zIndex` _(int)_ : Orders component on the z-axis
 - `wrapper` _(str)_ : Selector to use as a wrapper from which to calculate parallax position.
