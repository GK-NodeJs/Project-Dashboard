module.exports = {
  type: "object",
  properties: {
    fileId: { type: "string" },
  },
  required: ["fileId"],
  errorMessage: {
    properties: {
      fileId: "File ID is required and must be a string.",
    },
  },
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
