module.exports = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 2,
      maxLength: 10,
      errorMessage: {
        type: "Tag must be a string.",
        minLength: "Tag must be at least 2 characters.",
        maxLength: "Tag must be at most 10 characters.",
      },
    },
  },
  required: ["name"],
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
