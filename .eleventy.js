const languages = require("./src/_data/languages.js");

// Helper function to split array into chunks of 12
function chunkArray(array, size) {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

module.exports = function (eleventyConfig) {
  // Static File Passthrough Copies
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("src/_headers");

  // Date formatting filter
  eleventyConfig.addFilter("formatDate", function (date) {
    const d = new Date(date);

    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // Multilingual 12-Item Chunked Collection
  eleventyConfig.addCollection(
    "pagedSummariesByLang",
    function (collectionApi) {
      const allSummaries = collectionApi
        .getFilteredByGlob("src/summaries/*.md")
        .sort((a, b) => {
          const dateA = new Date(a.data.dateAdded || a.date);
          const dateB = new Date(b.data.dateAdded || b.date);
          return dateB - dateA;
        });

      const pagedCollection = [];

      languages.forEach((lang) => {
        // Filter summaries matching current language (defaulting untagged to "en")
        const langSummaries = allSummaries.filter(
          (item) => (item.data.lang || "en") === lang.code,
        );

        // Break into chunks of 12
        const chunks = chunkArray(langSummaries, 12);

        if (chunks.length === 0) {
          // If a language has 0 summaries, build 1 empty page so the route still exists
          pagedCollection.push({
            lang: lang,
            pageNumber: 0,
            totalPages: 1,
            items: [],
          });
        } else {
          chunks.forEach((chunkItems, index) => {
            pagedCollection.push({
              lang: lang,
              pageNumber: index,
              totalPages: chunks.length,
              items: chunkItems,
            });
          });
        }
      });

      return pagedCollection;
    },
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
