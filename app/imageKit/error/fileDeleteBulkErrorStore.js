module.exports = {
  type: "object",
  properties: {
    fileIds: {
      type: "array",
      items: {
        type: "string",
        errorMessage: {
          type: "File id's must be strings.",
        },
      },
      minItems: 1,
      uniqueItems: true,
      errorMessage: {
        type: "File id's must be an array of strings.",
        minItems: "File id's must contain at least 1 item.",
        uniqueItems: "File id's must contain unique values.",
      },
    },
  },
  required: ["fileIds"],
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
