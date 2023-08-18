module.exports = function(eleventyConfig) {
    
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