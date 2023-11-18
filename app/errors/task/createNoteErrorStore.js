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
    title: {
      type: "string",
      minLength: 3,
      maxLength: 25,
      errorMessage: {
        type: "Note title must be a string.",
        minLength: "Note title must be at least 3 characters.",
        maxLength: "Note title must be at most 25 characters.",
      },
    },
    description: {
      type: "string",
      minLength: 3,
      maxLength: 100,
      errorMessage: {
        type: "Note description path must be a string.",
        minLength: "Note description path must be at least 3 character.",
        maxLength: "Note description must be at most 100 characters.",
      },
    },
    pinned: {
      type: "boolean",
      errorMessage: {
        type: "Pinned must be a boolean.",
      },
    },
  },
  required: ["title", "description"],
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
