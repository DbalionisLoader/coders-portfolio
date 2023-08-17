module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("css/style.css");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("images/png");
     return { 
        dir: {input: ".",
              includes: "_includes"  
        }
    }  
};