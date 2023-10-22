module.exports = {
  type: "object",
  properties: {
    folderName: { type: "string", minLength: 4, maxLength: 15 },
    parentFolderPath: { type: "string" },
  },
  required: ["folderName"],
  errorMessage: {
    properties: {
      folderName:
        "Folder name is required and must be a string between 4 and 15 characters.",
      parentFolderPath: "Parent folder path must be a string.",
    },
  },
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
