# css-text [![npm (scoped)](https://img.shields.io/npm/v/@maximeij/css-text?color=green&label=npm%20package&logo=logo)](https://www.npmjs.com/package/@maximeij/css-text) [![image](http://vanilla-js.com/assets/button.png)](http://vanilla-js.com/)

Web Component to render text using CSS art allowing transitions between letter parts for text transform animations. While each character is wrapped in an html tag (`<i>` for now), it's intended to integrate like regular text, being selectable, copy-pastable, and accessible.

## Quick start

```npm
npm i @maximeij/css-text
```

Remember to import the css (includes the default monospace font)

```typescript
import '@maximeij/css-text';
import '@maximeij/css-text/css';
```

You need a font to determine the final shape of each letter. We currently provide a monospace adaptation in [src/fonts/monospace.css](src/fonts/monospace.css)

```html
<css-text class="monospace">CSS-TEXT DEMO</css-text>
```

## Going further

In the default `monospace` font, each letter is rendered using the `::before` and `::after` pseudo-elements. They are represented at `border-box` sized `absolute`ly positioned transparent boxes with borders sized and shaped to imitate sections of the letter.

Regardless of the font's ultimate implementation of the art, this opens the possibility to animate the shape of each letter to some extent. In the `monospace` example provided, `transition`s can be configured to allow for the effect of a letter morphing into another one when a piece of text changes.

It could also allow for `animation` properties to further animate one or more letters, and combine with existing CSS concepts like `:hover` and `:selected`.

### Example

See [index.html](index.html) for a quick example of how to invoke it the component and customize it. The [demo](demo/main.ts) TS code has examples of ways to enable animation on changing text and granular `transition`s.

## Recent changes

- [Changelog](CHANGELOG.md)

## Coming soon

- Lowercase alphabet
- Punctuation
- React version
