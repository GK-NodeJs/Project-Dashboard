module.exports = {
  type: "object",
  properties: {
    fileId: {
      type: "string",
      errorMessage: { type: "File ID must be a string." },
    },
  },
  required: ["fileId"],
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
