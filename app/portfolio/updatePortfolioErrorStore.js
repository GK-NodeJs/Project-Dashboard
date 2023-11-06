module.exports = {
  type: "object",
  minProperties: 1,
  properties: {
    portfolioHeader: {
      type: "object",
      properties: {
        profileName: {
          type: "string",
          minLength: 4,
          maxLength: 25,
        },
        githubUsername: {
          type: "string",
          minLength: 4,
          maxLength: 25,
        },
        profileImageURL: {
          type: "string",
          minLength: 15,
        },
        backgroundImageURL: {
          type: "string",
          minLength: 15,
        },
        resumeFileURL: {
          type: "string",
          minLength: 15,
        },
      },
      required: [
        "profileName",
        "githubUsername",
        "profileImageURL",
        "backgroundImageURL",
        "resumeFileURL",
      ],
      errorMessage: {
        properties: {
          profileName:
            "Profile name is required and must be between 4 and 25 characters.",
          githubUsername:
            "GitHub username is required and must be between 4 and 25 characters.",
          profileImageURL:
            "Profile image URL is required and must be at least 15 characters long.",
          backgroundImageURL:
            "Background image URL is required and must be at least 15 characters long.",
          resumeFileURL:
            "Resume file URL is required and must be at least 15 characters long.",
        },
      },
      additionalProperties: false,
    },
  },
  errorMessage: {
    minProperties:
      "At least one property is required from the following: 'portfolioHeader', to update your portfolio.",
  },
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
