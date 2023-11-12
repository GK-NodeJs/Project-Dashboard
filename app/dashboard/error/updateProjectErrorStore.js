module.exports = {
  type: "object",
  properties: {
    _id: {
      type: "string",
      errorMessage: {
        type: "Invalid id.",
      },
    },
    projectName: {
      type: "string",
      minLength: 4,
      maxLength: 25,
      errorMessage: {
        type: "Project name must be a string.",
        minLength: "Project name must be at least 4 characters.",
        maxLength: "Project name must be at most 25 characters.",
      },
    },
    clientName: {
      type: "string",
      minLength: 4,
      maxLength: 25,
      errorMessage: {
        type: "Client name must be a string.",
        minLength: "Client name must be at least 4 characters.",
        maxLength: "Client name must be at most 25 characters.",
      },
    },
    avatarUrl: {
      type: "string",
      errorMessage: { type: "Avatar URL must be a string." },
    },
    bookmark: {
      type: "boolean",
      errorMessage: { type: "Bookmark must be a boolean." },
    },
    progressStatus: {
      type: "string",
      errorMessage: { type: "Progress status must be a string." },
    },
    priorityStatus: {
      type: "string",
      errorMessage: {
        type: "Priority status must be a string.",
      },
    },
    projectType: {
      type: "array",
      minItems: 1,
      uniqueItems: true,
      items: {
        type: "string",
        enum: ["web", "android", "ios", "backend"],
        errorMessage: {
          type: "Project type must be a string.",
          enum: "Project type must be one of the following: web, android, ios, backend.",
        },
      },
      errorMessage: {
        type: "Project type must be an array of strings.",
        minItems: "At least one project type is required.",
        uniqueItems: "Project type must be unique value.",
      },
    },
    dueDate: {
      type: "string",
      errorMessage: {
        type: "Due date must be a string.",
      },
    },
    projectRoute: {
      type: "string",
      errorMessage: {
        type: "Project route must be a string.",
      },
    },
    frontendUrl: {
      type: "string",
      errorMessage: {
        type: "Frontend URL must be a string.",
      },
    },
    backendUrl: {
      type: "string",
      errorMessage: {
        type: "Backend URL must be a string.",
      },
    },
  },
  required: ["_id"],
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
