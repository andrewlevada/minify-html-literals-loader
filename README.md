# minify-html-literals-loader

![npm](https://img.shields.io/npm/v/minify-html-literals-loader)
![npm](https://img.shields.io/npm/dw/minify-html-literals-loader)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/andrewlevada/minify-html-literals-loader)

Webpack loader wrapper of [minify-html-literals](https://www.npmjs.com/package/minify-html-literals).
Loader can be placed anywhere in rule of file processing, with one exception:
if you transpile to ES5, loader must be placed before. 

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

Options are passed to `minify-html-literals` as described [here](https://www.npmjs.com/package/minify-html-literals#options).
