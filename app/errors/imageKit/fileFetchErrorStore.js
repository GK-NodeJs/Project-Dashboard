module.exports = {
  type: "object",
  properties: {
    skip: {
      type: "number",
      minimum: 0,
      maximum: 100,
      errorMessage: {
        type: "Skip limit must be a number.",
        minimum: "Skip limit must be greater than or equal to 0.",
        maximum: "Skip limit must be less than or equal to 100.",
      },
    },
    pageLimit: {
      type: "number",
      minimum: 5,
      maximum: 100,
      errorMessage: {
        type: "Page limit must be a number.",
        minimum: "Page limit must be greater than or equal to 5.",
        maximum: "Page limit must be less than or equal to 100.",
      },
    },
    path: {
      type: "string",
      minLength: 1,
      errorMessage: {
        type: "Folder path must be a string.",
        minLength: "Folder path must be at least 1 character.",
      },
    },
    type: {
      type: "string",
      enum: ["file", "folder"],
      errorMessage: {
        type: "File type must be a string.",
        enum: "File type must be either 'file' or 'folder'.",
      },
    },
    tags: {
      type: "array",
      uniqueItems: true,
      items: {
        type: "string",
        minLength: 1,
        errorMessage: {
          type: "Tags must be strings.",
          minLength: "Tags must be at least 1 character.",
        },
      },
      errorMessage: {
        type: "Tags must be an array of strings.",
        uniqueItems: "Tags must contain unique values.",
      },
    },
    searchQuery: {
      type: "string",
      errorMessage: { type: "Search query must be a string." },
    },
    sort: {
      type: "string",
      enum: [
        "ASC_NAME",
        "DESC_NAME",
        "ASC_SIZE",
        "DESC_SIZE",
        "ASC_CREATED",
        "DESC_CREATED",
        "ASC_UPDATED",
        "DESC_UPDATED",
      ],
      errorMessage: {
        type: "Sort option query must be a string.",
        enum: "Sort option query must be one of the following: 'ASC_NAME', 'DESC_NAME', 'ASC_SIZE', 'DESC_SIZE', 'ASC_CREATED', 'DESC_CREATED', 'ASC_UPDATED', 'DESC_UPDATED'.",
      },
    },
  },
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
