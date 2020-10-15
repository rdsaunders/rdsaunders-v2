module.exports = function (eleventyConfig) {

    // watch for sass hanges during 11ty serve
    eleventyConfig.addWatchTarget("./src/sass/");
    // copy css to public folder on build
    eleventyConfig.addPassthroughCopy("./src/css");

    eleventyConfig.setDataDeepMerge(true);


    return {
        dir: {
            input: "src",
            output: "public"
        },
    };
};