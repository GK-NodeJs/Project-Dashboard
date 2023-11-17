module.exports = {
  type: "object",
  properties: {
    folderPath: {
      type: "string",
      minLength: 1,
      errorMessage: {
        type: "Folder path must be a string.",
        minLength: "Folder path must be at least 1 character.",
      },
    },
  },
  required: ["folderPath"],
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
