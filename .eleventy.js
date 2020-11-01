// Import transforms
const parseTransform = require('./src/transforms/parse-html.js');

module.exports = function (eleventyConfig) {


    // watch for sass changes during 11ty serve
    eleventyConfig.addWatchTarget("./src/sass/");

    // Transforms
    eleventyConfig.addTransform('parse', parseTransform);

    // Passthrough copy
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/images");


    eleventyConfig.setDataDeepMerge(true);

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

    return {
        dir: {
            input: "src",
            output: "public"
        },
    };
};