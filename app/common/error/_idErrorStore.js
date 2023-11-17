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
  },
  required: ["_id"],
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
