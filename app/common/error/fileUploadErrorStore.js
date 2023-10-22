module.exports = {
  type: "object",
  properties: {
    folder: { type: "string", minLength: 4, maxLength: 15 },
  },
  errorMessage: {
    properties: {
      folder:
        "Folder name must be a string and must be between 4 and 15 characters.",
    },
  },
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
