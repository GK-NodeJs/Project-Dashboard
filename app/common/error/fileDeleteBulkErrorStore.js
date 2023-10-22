module.exports = {
  type: "object",
  properties: {
    fileIds: {
      type: "array",
      items: { type: "string" },
      minItems: 1,
      uniqueItems: true,
    },
  },
  required: ["fileIds"],
  errorMessage: {
    properties: {
      fileIds:
        "File id's are required and must be an array of strings with unique values.",
    },
  },
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
