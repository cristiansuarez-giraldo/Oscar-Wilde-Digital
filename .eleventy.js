module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/xml");
    eleventyConfig.addPassthroughCopy("src/assets/favicon.ico");
    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "dist",
        },
    };
};
