module.exports = function (eleventyConfig) {
    // Output directory: _site
    // Copy static folder
    eleventyConfig.addPassthroughCopy("static");
};
