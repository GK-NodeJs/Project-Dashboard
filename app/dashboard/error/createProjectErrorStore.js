module.exports = {
  type: "object",
  properties: {
    projectName: { type: "string", minLength: 4, maxLength: 25 },
    clientName: { type: "string", minLength: 4, maxLength: 25 },
    avatarUrl: { type: "string" },
    bookmark: { type: "boolean" },
    progressStatus: {
      type: "string",
      enum: ["", "In Progress", "Completed", "On Hold"],
    },
    priorityStatus: { type: "string", enum: ["", "Low", "Medium", "High"] },
    projectType: {
      type: "array",
    },
    dueDate: { type: "string" },
    frontendUrl: { type: "string" },
    backendUrl: { type: "string" },
  },
  required: ["projectName", "clientName"],
  errorMessage: {
    properties: {
      projectName:
        "Project name is required and must be at least 4 and at most 25",
      clientName:
        "Client name is required and must be at least 4 and at most 25",
      avatarUrl: "Avatar url is required",
      progressStatus:
        "Progress status must be one of In Progress, Completed, On Hold",
      priorityStatus: "Priority status must be one of Low, Medium, High",
      projectType: "Project type must be one of Web, Android, IOS, Backend",
      dueDate: "Due date is required and must be a valid date",
    },
  },
  additionalProperties: {
    not: true,
    errorMessage: "You have provided an invalid property ${0#}",
  },
};
