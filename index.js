const minify = require('minify-html-literals').minifyHTMLLiterals;

module.exports = function(src) {
  // Skip files without html literals
  if (!src.match(/html`([^`]+)`/)) return src;

  const minified = minify(src, this.getOptions());
  return minified ? minified.code : src;
};
