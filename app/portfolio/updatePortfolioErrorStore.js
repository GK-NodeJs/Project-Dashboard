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
      errorMessage: {
        properties: {
          profileName: "Profile name is required.",
          gitHubUsername: "GitHub username is required.",
          profileImageURL: "Profile image URL is required.",
          backgroundImageURL: "Background image URL is required.",
          resumeFileURL: "Resume file URL is required.",
        },
      },
      additionalProperties: false,
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
                  errorMessage: {
                    type: "Sub menu link must be a string",
                  },
                },
                iconName: {
                  type: "string",
                  errorMessage: { type: "Sub menu icon name must be a string" },
                },
              },
              required: ["name", "link", "iconName"],
              errorMessage: {
                properties: {
                  name: "Sub menu name is required.",
                  link: "Sub menu link is required.",
                  iconName: "Sub menu icon name is required.",
                },
              },
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
        errorMessage: {
          properties: {
            menuType: "Menu type is required.",
            subMenus: "Sub menus are required.",
          },
        },
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
    minProperties:
      "At least one property is required from the following: 'portfolioHeader', 'portfolioMenus', to update your portfolio.",
  },
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
