# minify-html-literals-loader

Webpack loader wrapper of [minify-html-literals](https://www.npmjs.com/package/minify-html-literals)

## Installation

```
npm install minify-html-literals-loader --save-dev
```

## Usage

```javascript
module: {
  rules: [{
    test: /\.(js|jsx|ts|tsx)$/,
    use: [
      {
        loader: 'minify-html-literals-loader'
      }
    ]
  }]
}
```

Options are passed to `minify-html-literals` as described [here](https://www.npmjs.com/package/html-minifier#options-quick-reference).
