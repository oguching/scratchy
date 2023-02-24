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

        dir: {
            input: "content",
            output: "_site",
            includes: "_includes",
            data: "_data"
        }
    }
}