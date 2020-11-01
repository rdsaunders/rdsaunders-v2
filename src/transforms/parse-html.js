const jsdom = require('@tbranyen/jsdom');
const {JSDOM} = jsdom;
const getSize = require('image-size');

module.exports = function(value, outputPath) {
  if (outputPath.endsWith('.html')) {
    const DOM = new JSDOM(value, {
      resources: 'usable'
    });

    const document = DOM.window.document;
    const articleImages = [...document.querySelectorAll('.u-photo')];

    if (articleImages.length) {
      articleImages.forEach(image => {

        const file = image.getAttribute('src');
        
        if (file.indexOf('http') < 0) {
          const dimensions = getSize('src' + file);
          
          image.setAttribute('width', dimensions.width);
          image.setAttribute('height', dimensions.height);;
        }

      });
    }

    return '<!DOCTYPE html>\r\n' + document.documentElement.outerHTML;
  }
  return value;
};
