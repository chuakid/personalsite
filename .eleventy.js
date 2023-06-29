const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function (config) {
    // Output directory: _site
    // Copy static folder
    config.addPassthroughCopy("src/static");

    //For printing SVGs
    const fs = require("fs");

    config.addFilter('printFileContents', function (filePath) {
        const fileContents = fs.readFileSync(filePath, (err, data) => {
            if (err) throw err;
            return data;
        });

        return fileContents;
    });
    // If you have other `addPlugin` calls, it’s important that UpgradeHelper is added last.
    config.addPlugin(UpgradeHelper);

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
