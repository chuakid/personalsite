module.exports = function (config) {
    // Output directory: _site
    // Copy static folder
    // config.addPassthroughCopy("src/static");

    //For printing SVGs
    const fs = require("fs");

    config.addFilter('printFileContents', function (filePath) {
        const fileContents = fs.readFileSync(filePath, (err, data) => {
            if (err) throw err;
            return data;
        });

        return fileContents;
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
