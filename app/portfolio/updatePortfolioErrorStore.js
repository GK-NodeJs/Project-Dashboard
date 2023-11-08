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
      minItems: 1,
      uniqueItems: true,
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
            minItems: 1,
            uniqueItems: true,
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
              additionalProperties: {
                not: true,
                errorMessage: "Invalid property: ${0#}.",
              },
            },
            errorMessage: {
              type: "Sub menu must be an array of objects.",
              minItems: "Sub menu must have at least one item.",
              uniqueItems: "Sub menu must not have duplicate items.",
            },
          },
        },
        required: ["menuType", "subMenus"],
        additionalProperties: {
          not: true,
          errorMessage: "Invalid property: ${0#}.",
        },
      },
      errorMessage: {
        type: "Portfolio menus must be an array of objects.",
        minItems: "Portfolio menus must have at least one item.",
        uniqueItems: "Portfolio menus must not have duplicate items.",
      },
    },
    portfolioProjects: {
      type: "array",
      minItems: 1,
      uniqueItems: true,
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            minLength: 4,
            maxLength: 25,
            errorMessage: {
              type: "Project name must be a string",
              minLength: "Project name must be between 4 and 25 characters.",
              maxLength: "Project name must be between 4 and 25 characters.",
            },
          },
          imageURL: {
            type: "string",
            minLength: 15,
            errorMessage: {
              type: "Project image URL must be a string",
              minLength: "Project image URL must be at least 15 characters.",
            },
          },
          usedTech: {
            type: "array",
            minItems: 1,
            uniqueItems: true,
            items: {
              type: "string",
              minLength: 2,
              maxLength: 25,
              errorMessage: {
                type: "Used technology name must be a string",
                minLength:
                  "Used technology name must be at least 2 characters.",
                maxLength:
                  "Used technology name must be at most 25 characters.",
              },
            },
            errorMessage: {
              type: "Used technologies must be an array of strings.",
              minItems: "Used technologies must have at least one item.",
              uniqueItems: "Used technologies must not have duplicate items.",
            },
          },
          description: {
            type: "array",
            minItems: 1,
            uniqueItems: true,
            items: {
              type: "string",
              maxLength: 200,
              errorMessage: {
                type: "Description must be a string",
                maxLength: "Description must be at most 200 characters.",
              },
            },
            errorMessage: {
              type: "Description must be an array of strings.",
              minItems: "Description must have at least one item.",
              uniqueItems: "Description must not have duplicate items.",
            },
          },
          link: {
            type: "string",
            errorMessage: {
              type: "Project link must be a string",
            },
          },
        },
        required: ["name", "imageURL", "usedTech", "description"],
        additionalProperties: {
          not: true,
          errorMessage: "Invalid property: ${0#}.",
        },
      },
      errorMessage: {
        type: "Portfolio projects must be an array of objects.",
        minItems: "Portfolio projects must have at least one item.",
        uniqueItems: "Portfolio projects must not have duplicate items.",
      },
    },
    portfolioSkills: {
      type: "array",
      minItems: 1,
      uniqueItems: true,
      items: {
        type: "object",
        properties: {
          skillType: {
            type: "string",
            enum: ["Frontend", "Backend", "Database", "DevOps", "Other"],
            errorMessage: {
              type: "Skill type must be a string.",
              enum: "Skill type must be Frontend, Backend, Database, DevOps, or Other.",
            },
          },
          skills: {
            type: "array",
            minItems: 1,
            uniqueItems: true,
            items: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  minLength: 2,
                  maxLength: 25,
                  errorMessage: {
                    type: "Tech name must be a string",
                    minLength: "Tech name must be at least 2 characters.",
                    maxLength: "Tech name must be at most 25 characters.",
                  },
                },
                icon: {
                  type: "string",
                  minLength: 10,
                  errorMessage: {
                    type: "Tech icon must be a string",
                    minLength: "Tech icon must be at least 10 characters.",
                  },
                },
                secondaryTechName: {
                  type: "string",
                  minLength: 2,
                  maxLength: 15,
                  errorMessage: {
                    type: "Secondary tech name must be a string",
                    minLength:
                      "Secondary tech name must at least 2 characters.",
                    maxLength:
                      "Secondary tech name must at most 15 characters.",
                  },
                },
                secondaryTechIcon: {
                  type: "string",
                  minLength: 10,
                  errorMessage: {
                    type: "Secondary tech icon must be a string",
                    minLength:
                      "Secondary tech icon must be at least 10 characters.",
                  },
                },
                knowledgeLevel: {
                  type: "number",
                  minimum: 0,
                  maximum: 100,
                  errorMessage: {
                    type: "Knowledge level must be a number",
                    minimum: "Knowledge level must be at least 0%.",
                    maximum: "Knowledge level must be at most 100%.",
                  },
                },
              },
              required: ["name", "icon", "knowledgeLevel"],
              additionalProperties: {
                not: true,
                errorMessage: "Invalid property: ${0#}.",
              },
            },
            errorMessage: {
              type: "Tech skills must be an array of objects.",
              minItems: "Tech skills must have at least one item.",
              uniqueItems: "Tech skills must not have duplicate items.",
            },
          },
        },
        required: ["skillType", "skills"],
        additionalProperties: {
          not: true,
          errorMessage: "Invalid property: ${0#}.",
        },
      },
      errorMessage: {
        type: "Portfolio skills must be an array of objects.",
        minItems: "Portfolio skills must have at least one item.",
        uniqueItems: "Portfolio skills must not have duplicate items.",
      },
    },
  },
  errorMessage: {
    type: "Portfolio must be an object.",
    minProperties:
      "At least one section ('portfolioHeader', 'portfolioMenus', 'portfolioProjects', or 'portfolioSkills') is required.",
  },
  additionalProperties: {
    not: true,
    errorMessage: "Invalid property: ${0#}.",
  },
};
