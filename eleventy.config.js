module.exports = function(eleventyConfig) {
    // Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig.addPassthroughCopy({
		"./public/": "/"
	});

    return {
        // When a passthrough file is modified, rebuild the pages:
        passthroughFileCopy: true,

        // Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			"md",
            "njk",
            "html",
            "liquid"
		],

        // Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

        // Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

        dataTemplateEngine: 'njk',

        // the _includes and _data directories are relative to the input directory
        // I guess it's assuming they live in the directory input points to.
        // which is why we need to go up one level to access the _includes layout dir
        dir: {
            input: "content",
            output: "_site",
            includes: "../_includes",
        }
    }
}