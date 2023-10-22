module.exports = {
  type: "object",
  properties: {
    folderPath: { type: "string" },
  },
  required: ["folderPath"],
  errorMessage: {
    properties: {
      folderPath: "Folder path is required and must be a string.",
    },
  },
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
