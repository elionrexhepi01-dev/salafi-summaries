module.exports = function (eleventyConfig) {
  // Static File Passthrough Copies
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("src/_headers");

  // Summaries Collection
  // Sort 'summaries' collection by dateAdded (newest first)
  eleventyConfig.addCollection("summaries", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/summaries/*.md")
      .sort((a, b) => {
        const dateA = new Date(a.data.dateAdded || a.date);
        const dateB = new Date(b.data.dateAdded || b.date);
        return dateB - dateA;
      });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
