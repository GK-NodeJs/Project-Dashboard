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
          errorMessage: {
            type: "Profile name must be a string.",
            minLength: "Profile name must be between 4 and 25 characters.",
            maxLength: "Profile name must be between 4 and 25 characters.",
          },
        },
        gitHubUsername: {
          type: "string",
          minLength: 4,
          maxLength: 25,
          errorMessage: {
            type: "GitHub username name must be a string.",
            minLength: "GitHub username must be between 4 and 25 characters.",
            maxLength: "GitHub username must be between 4 and 25 characters.",
          },
        },
        profileImageURL: {
          type: "string",
          minLength: 15,
          errorMessage: {
            type: "Profile image URL name must be a string.",
            minLength: "Profile image URL must be greater than 15 characters.",
          },
        },
        backgroundImageURL: {
          type: "string",
          minLength: 15,
          errorMessage: {
            type: "Background image URL must be a string.",
            minLength:
              "Background image URL must be greater than 15 characters.",
          },
        },
        resumeFileURL: {
          type: "string",
          minLength: 15,
          errorMessage: {
            type: "Resume file URL must be a string.",
            minLength: "Resume file URL must be greater than 15 characters.",
          },
        },
      },
      required: [
        "profileName",
        "gitHubUsername",
        "profileImageURL",
        "backgroundImageURL",
        "resumeFileURL",
      ],
      additionalProperties: {
        not: true,
        errorMessage: "Invalid property: ${0#}.",
      },
    },
    portfolioMenus: {
      type: "array",
      items: {
        type: "object",
        properties: {
          menuType: {
            type: "string",
            enum: ["Projects", "Social", "Main"],
            default: "Main",
            errorMessage: {
              type: "Menu type must be a string.",
              enum: "Menu type must be Projects, Social, or Main.",
            },
          },
          subMenus: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  minLength: 4,
                  maxLength: 15,
                  errorMessage: {
                    type: "Sub menu name must be a string",
                    minLength:
                      "Sub menu name must be between 4 and 25 characters.",
                    maxLength:
                      "Sub menu name must be between 4 and 25 characters.",
                  },
                },
                link: {
                  type: "string",
                  minLength: 1,
                  errorMessage: {
                    type: "Sub menu link must be a string",
                    minLength: "Sub menu link must be at least 1 characters.",
                  },
                },
                iconName: {
                  type: "string",
                  minLength: 2,
                  errorMessage: {
                    type: "Sub menu icon name must be a string",
                    minLength:
                      "Sub menu icon name must be at least 2 characters.",
                  },
                },
              },
              required: ["name", "link", "iconName"],
              additionalProperties: false,
            },
            minItems: 1,
            uniqueItems: true,
            errorMessage: {
              type: "Sub menu must be an array of objects.",
              minItems: "Sub menu must have at least one item.",
              uniqueItems: "Sub menu must not have duplicate items.",
            },
          },
        },
        required: ["menuType", "subMenus"],
      },
      minItems: 1,
      uniqueItems: true,
      errorMessage: {
        type: "Portfolio menus must be an array of objects.",
        minItems: "Portfolio menus must have at least one item.",
        uniqueItems: "Portfolio menus must not have duplicate items.",
      },
    },
  },
  errorMessage: {
    type: "Portfolio must be an object.",
    minProperties:
      "At least one property is required from the following: 'portfolioHeader', 'portfolioMenus', to update your portfolio.",
  },
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
