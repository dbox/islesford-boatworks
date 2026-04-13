const htmlmin = require('html-minifier')
const { DateTime } = require("luxon"); // You might need to run 'npm install luxon'
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  
  // --- NEW FILTERS START ---
  
  // 1. The Date Filter (Fixes the htmlDateString error)
  eleventyConfig.addFilter("htmlDateString", (dateObj, format = "yyyy-LL-dd") => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat(format);
  });

  // 2. The Markdown Filter (Lets you use **bold** in your YAML)
  const mdLib = markdownIt({ html: true });
  eleventyConfig.addFilter("md", (content) => {
    if (!content) return "";
    return mdLib.renderInline(content);
  });

  eleventyConfig.addFilter("intComma", (value) => {
    const number = Number(value);
    if (Number.isNaN(number)) return value;
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    }).format(number);
  });

  // --- NEW FILTERS END ---

  // Copy static assets
  eleventyConfig.addPassthroughCopy('src/static')
  eleventyConfig.addPassthroughCopy('src/_redirects');

  // Minify HTML in production
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_ENV === 'production' &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
    }
    return content
  })

  eleventyConfig.addWatchTarget('./src/_assets/')

  return {
    dir: {
      input: 'src/',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    },
    templateFormats: ['html', 'md', 'njk', 'ico'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
  }
}
