// Import transforms
const parseTransform = require('./src/transforms/parse-html.js');
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginSvgSprite = require("eleventy-plugin-svg-sprite");

const filters = require('./utils/filters.js')
const shortcodes = require('./utils/shortcodes.js')

module.exports = function (config) {


    // watch for sass changes during 11ty serve
    config.addWatchTarget("./src/sass/");

    // Transforms
    config.addTransform('parse', parseTransform);

 

    // Add plugins
    config.addPlugin(pluginNavigation);



    config.addPlugin(pluginSvgSprite, {
      path: "./src/assets/icons",
      svgSpriteShortcode: "iconsprite"
    })

    // Filters
    Object.keys(filters).forEach((filterName) => {
        config.addFilter(filterName, filters[filterName])
    })
    
    // Shortcodes
    Object.keys(shortcodes).forEach((shortcodeName) => {
      config.addShortcode(shortcodeName, shortcodes[shortcodeName])
    })

    // Layouts
    config.addLayoutAlias('base', 'base.njk')
    config.addLayoutAlias('article', 'article.njk')
    config.addLayoutAlias('checkins', 'checkins.njk')
    config.addLayoutAlias('link', 'link.njk')
    config.addLayoutAlias('photo', 'photo.njk')

   // Passthrough file copy
   config.addPassthroughCopy("./src/css");
   config.addPassthroughCopy("./src/images");

   // Deep merge
   config.setDataDeepMerge(true);



    config.addCollection("tagList", function(collection) {
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
                case "articles":
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


    // Base configuration
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