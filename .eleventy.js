
const eleventyGoogleFonts = require("eleventy-google-fonts"); 
const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
    
    /* Plugins */
    eleventyConfig.addPlugin(eleventyGoogleFonts);
    /* PassThrought */
    eleventyConfig.addPassthroughCopy("css/style.css");
    eleventyConfig.addPassthroughCopy("css/hero.css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("images/png");
    eleventyConfig.addPassthroughCopy("site.json");
    eleventyConfig.addPassthroughCopy("js/main.js");
    /*Allow redirect file to _site */
    eleventyConfig.addPassthroughCopy("_redirects");
    /* Custom Filters */
    eleventyConfig.addCollection("examplePosts", function(collection) {
        return collection.getFilteredByGlob("./posts/examples/*.md");
      });

      eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("./posts/portfolio/*.md");
      });

      /* Date filter */
      eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
      });



    /* Watch for changes */ 
    eleventyConfig.addWatchTarget("css/");
    /* Returns */  
     return { 
        dir: {      
        input: ".",
        includes: "_includes",
        output: "_site",
        data: "_data"
        }
    }   
};