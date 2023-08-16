module.exports = function(eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/svg");
    eleventyConfig.addLayoutAlias("base", "layouts/base.njk");

    return {
       dir: {
          input: "src",
          output: "dist",
          includes: "includes",
          data: "data",
       },
       templateFormats: ["html", "njk", "md", "11ty.js"],
       htmlTemplateEngine: "njk",
       markdownTemplateEngine: "njk",
    }
 };