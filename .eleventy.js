module.exports = function (config) {
    // Output directory: _site
    // Copy static folder
    config.addPassthroughCopy("src/static");
    config.addPassthroughCopy({'src/_includes/assets/': "/assets/"});

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
