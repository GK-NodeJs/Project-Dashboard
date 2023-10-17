module.exports = {
  type: "object",
  properties: {
    projectName: { type: "string", minLength: 4, maxLength: 25 },
    clientName: { type: "string", minLength: 4, maxLength: 25 },
    avatarUrl: { type: "string" },
    bookmark: { type: "boolean" },
    progressStatus: { type: "string" },
    priorityStatus: { type: "string" },
    projectType: {
      type: "array",
    },
    dueDate: { type: "string" },
    frontendUrl: { type: "string" },
    backendUrl: { type: "string" },
  },
  required: ["projectName", "clientName", "projectType"],
  errorMessage: {
    properties: {
      projectName:
        "Project name is required and must be between 4 and 25 characters.",
      clientName:
        "Client name is required and must be between 4 and 25 characters.",
      projectType: "At least one project type is required.",
    },
  },
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
