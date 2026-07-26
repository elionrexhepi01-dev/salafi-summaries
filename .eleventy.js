module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  eleventyConfig.addPassthroughCopy("src/sw.js");
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addCollection("summaries", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/summaries/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
