const minify = require('minify-html-literals').minifyHTMLLiterals;

module.exports = function(src) {
  // Skip files without literals
  if (!src.match(/`([^`]+)`/)) return src;

  const minified = minify(src, this.getOptions());
  return minified ? minified.code : src;
};
