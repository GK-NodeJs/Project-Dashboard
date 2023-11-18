module.exports = {
  type: "object",
  properties: {
    _id: {
      type: "string",
      pattern: "^[0-9a-fA-F]{24}$",
      errorMessage: {
        type: "Note id must be a string.",
        pattern: "Note id must be a valid id.",
      },
    },
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
  required: ["_id", "name"],
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
