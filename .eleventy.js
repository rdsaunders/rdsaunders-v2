// Import transforms
const parseTransform = require('./src/transforms/parse-html.js');
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginSvgSprite = require("eleventy-plugin-svg-sprite");

const filters = require('./utils/filters.js')
const shortcodes = require('./utils/shortcodes.js')

module.exports = function (eleventyConfig) {


    // watch for sass changes during 11ty serve
    eleventyConfig.addWatchTarget("./src/sass/");

    // Transforms
    eleventyConfig.addTransform('parse', parseTransform);

    // Passthrough copy
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/images");

    // Add plugins
    eleventyConfig.addPlugin(pluginNavigation);


    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addPlugin(pluginSvgSprite, {
      path: "./src/assets/icons",
      svgSpriteShortcode: "iconsprite"
    })

    // Filters
    Object.keys(filters).forEach((filterName) => {
        eleventyConfig.addFilter(filterName, filters[filterName])
    })
    
     // Shortcodes
     Object.keys(shortcodes).forEach((shortcodeName) => {
      eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
    })


    eleventyConfig.addCollection("tagList", function(collection) {
        let tagSet = new Set();
        collection.getAll().forEach(function(item) {
          if( "tags" in item.data ) {
            let tags = item.data.tags;
    
            tags = tags.filter(function(item) {
              switch(item) {
                // this list should match the `filter` list in tags.njk
                case "all":
                case "nav":
                case "post":
                case "posts":
                case "photos":
                  return false;
              }
    
              return true;
            });
    
            for (const tag of tags) {
              tagSet.add(tag);
            }
          }
        });
    
        // returning an array in addCollection works in Eleventy 0.5.3
        return [...tagSet];
      });


    // Base configuation
    return {
      
        dir: {
            input: "src",
            output: "public",
            includes: "includes",
            layouts: "layouts",
            data: "data"
        },
        templateFormats: ['njk', 'md', '11ty.js'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    };

};