module.exports = function (config) {
    // Output directory: _site
    // Copy static folder
    config.addPassthroughCopy("static");
    config.addPassthroughCopy({
        'src/_includes/assets/css/style.css': './style.css'
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
