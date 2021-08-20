const minify = require('minify-html-literals').minifyHTMLLiterals;
const getOptions = require('loader-utils').getOptions;

module.exports = function(src) {
  // Skip files without html literals
  let htmlLiteralsMatch = src.match(/html`([^`]*)`/g);
  if (!htmlLiteralsMatch) return src;
  return minify(src, getOptions(this)).code;
};
