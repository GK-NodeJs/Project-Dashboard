module.exports = {
  type: "object",
  properties: {
    folderName: {
      type: "string",
      minLength: 2,
      maxLength: 15,
      errorMessage: {
        type: "Folder name must be a string.",
        minLength: "Folder name must be at least 2 characters.",
        maxLength: "Folder name must be at most 15 characters.",
      },
    },
    parentFolderPath: {
      type: "string",
      minLength: 1,
      errorMessage: {
        type: "Parent folder path must be a string.",
        minLength: "Parent folder path must be at least 1 character.",
      },
    },
  },
  required: ["folderName"],
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
