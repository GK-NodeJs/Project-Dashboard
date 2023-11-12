module.exports = {
  type: "object",
  properties: {
    folder: { type: "string", minLength: 1 },
  },
  errorMessage: {
    properties: {
      folder:
        "Folder name must be a string and must be between 1 and 15 characters.",
    },
  },
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
