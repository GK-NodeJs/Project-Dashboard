module.exports = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 2,
      maxLength: 12,
      errorMessage: {
        type: "List name must be a string.",
        minLength: "List name must be at least 2 characters.",
        maxLength: "List name must be at most 12 characters.",
      },
    },
    color: {
      type: "string",
      pattern: "^#[0-9a-fA-F]{6}$",
      errorMessage: {
        type: "Color must be a string.",
        pattern: "Color must be a valid hex color.",
      },
    },
  },
  required: ["name", "color"],
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
