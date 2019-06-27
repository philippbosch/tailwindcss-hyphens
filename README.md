# tailwindcss-hyphens

A plugin for [Tailwind CSS](https://www.tailwindcss.com/) to create
utility classes for [`hyphens`](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens).

## Requirements

This plugin requires **Tailwind CSS v1.x**.

## Installation

```shell
npm install --save-dev tailwindcss-hyphens
```

or

```shell
yarn add --dev tailwindcss-hyphens
```

## Usage

In your _tailwind.config.js_:

```js
module.exports = {
  // …
  plugins: [
    // …
    require("tailwindcss-hyphens")
    // …
  ]
  // …
};
```

## Utilities

By default, this plugin generates the following utilities:

```css
.hyphens-none {
  hyphens: none;
}

.hyphens-manual {
  hyphens: manual;
}

.hyphens-auto {
  hyphens: auto;
}
```

## Customization

If you need a utility class for a non-standard value, you can customize
this in _tailwind.config.js_:

```js
module.exports = {
  theme: {
    // …
    hyphens: {
      "foo-bar": "foo-bar"
    }
    // …
  }
  // …
};
```

This would generate the following utility class:

```css
.hyphens-foo-bar {
  hyphens: foo-bar;
}
```

## License

[MIT](https://philippbosch.mit-license.org/)
