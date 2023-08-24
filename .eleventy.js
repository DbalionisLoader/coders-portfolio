
const eleventyGoogleFonts = require("eleventy-google-fonts");
module.exports = function(eleventyConfig) {
    
  
   eleventyConfig.addPlugin(eleventyGoogleFonts);



    eleventyConfig.addPassthroughCopy("css/style.css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("images/png");
     return { 
        dir: {      
        input: ".",
        includes: "_includes",
        output: "dist",
        data: "_data"
        }
    }   
};