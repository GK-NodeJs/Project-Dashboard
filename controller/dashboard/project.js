const { isEmpty } = require("lodash");
const Project = require("../../modules/dashboard/project");
const Response = require("../../middleware/response");

class ProjectClass {
  async getAllProjects() {
    try {
      let getProject = await Project.find({});
      if (!getProject || isEmpty(getProject)) {
        return {
          name: "Success",
          message: "Projects not found",
        };
      } else {
        return {
          name: "Success",
          message: "Projects fetched successfully",
          data: getProject,
        };
      }
    } catch (error) {
      throw {
        name: "ServerError",
        message: "Something went wrong",
      };
    }
  }

  async getAllProjectProcess(req, res) {
    try {
      let project = new ProjectClass();
      let response = await project.getAllProjects();
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }

  async createProject(reqData) {
    try {
      let projectData = await Project.create(reqData);
      if (!projectData || isEmpty(projectData)) {
        throw {
          name: "ServerError",
          message: "Something went wrong while creating a project",
        };
      } else {
        return {
          name: "Success",
          message: "Project created successfully",
          data: projectData,
        };
      }
    } catch (error) {
      throw {
        name: "ServerError",
        message: "Something went wrong",
      };
    }
  }

  async createProjectProcess(req, res) {
    try {
      let project = new ProjectClass();
      let response = await project.createProject(req.body);
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }

  async deleteProject(reqData) {
    try {
      let projectData = await Project.findByIdAndDelete(reqData._id);
      if (!projectData || isEmpty(projectData)) {
        throw {
          name: "Success",
          message: "Something went wrong while deleting a project",
        };
      } else {
        return {
          name: "Success",
          message: "Project deleted successfully",
          data: projectData,
        };
      }
    } catch (error) {
      throw {
        name: "ServerError",
        message: "Something went wrong",
      };
    }
  }

  async deleteProjectProcess(req, res) {
    try {
      let project = new ProjectClass();
      let response = await project.deleteProject(req.body);
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }
}

module.exports = new ProjectClass();
