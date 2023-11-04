module.exports = {
  type: "object",
  properties: {
    skip: { type: "number", minimum: 0 },
    pageLimit: { type: "number", minimum: 5, maximum: 100 },
    path: { type: "string" },
    type: { type: "string" },
    tags: { type: "array", items: { type: "string" }, uniqueItems: true },
    searchQuery: { type: "string" },
  },
  errorMessage: {
    properties: {
      skip: "Skip limit must be a number and greater than 0.",
      pageLimit: "Page limit must be a number between 5 and 100.",
      path: "Folder Path must be a string.",
      type: "File type must be a string.",
      tags: "Tags must be an array of strings with unique values.",
      searchQuery: "Search query must be a string.",
    },
  },
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
