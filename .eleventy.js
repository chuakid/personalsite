module.exports = function (config) {
    // Output directory: _site
    // Copy static folder
    config.addPassthroughCopy("src/static");

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
