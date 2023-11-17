const ProjectSchema = require("../modules/projects");
const Response = require("../middleware/response");
const { isEmpty } = require("lodash");

class ProjectClass {
  async getAllProjects() {
    try {
      const getProject = await ProjectSchema.find({});
      const message =
        getProject && !isEmpty(getProject)
          ? "Projects fetched successfully"
          : "Projects not found";
      return {
        name: "Success",
        message,
        data: getProject && !isEmpty(getProject) ? getProject : undefined,
      };
    } catch (error) {
      throw {
        name: "ServerError",
        message: "Something went wrong",
      };
    }
  }

  async getAllProjectProcess(req, res) {
    try {
      const project = await new ProjectClass().getAllProjects();
      Response.render(res, project);
    } catch (error) {
      Response.render(res, error);
    }
  }

  async createProject(reqData) {
    try {
      const projectData = await ProjectSchema.create(reqData);
      if (!projectData || isEmpty(projectData))
        throw {
          name: "ServerError",
          message: "Something went wrong while creating a project",
        };
      return {
        name: "Success",
        message: "Project created successfully",
        data: projectData,
      };
    } catch (error) {
      throw { name: "ServerError", message: "Something went wrong" };
    }
  }

  async createProjectProcess(req, res) {
    try {
      const response = await new ProjectClass().createProject(req.body);
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }

  async updateProject(reqData) {
    try {
      const projectReqData = {
        projectName: reqData.projectName,
        clientName: reqData.clientName,
        avatarUrl: reqData.avatarUrl,
        bookmark: reqData.bookmark,
        progressStatus: reqData.progressStatus,
        priorityStatus: reqData.priorityStatus,
        projectType: reqData.projectType,
        dueDate: reqData.dueDate,
        projectRoute: reqData.projectRoute,
        frontendUrl: reqData.frontendUrl,
        backendUrl: reqData.backendUrl,
      };
      const projectData = await ProjectSchema.findByIdAndUpdate(
        reqData._id,
        { $set: projectReqData },
        { new: true }
      );
      if (!projectData || isEmpty(projectData)) {
        throw {
          name: "ServerError",
          message: "Something went wrong while updating a project",
        };
      }
      return {
        name: "Success",
        message: "Project updated successfully",
        data: projectData,
      };
    } catch (error) {
      throw { name: "ServerError", message: "Something went wrong", error };
    }
  }

  async updateProjectProcess(req, res) {
    try {
      const project = new ProjectClass();
      const response = await project.updateProject(req.body);
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }

  async deleteProject(reqData) {
    try {
      const projectData = await ProjectSchema.findByIdAndDelete(reqData._id);
      if (!projectData || isEmpty(projectData)) {
        throw {
          name: "Success",
          message: "Something went wrong while deleting a project",
        };
      }
      return {
        name: "Success",
        message: "Project deleted successfully",
        data: projectData,
      };
    } catch (error) {
      throw { name: "ServerError", message: "Something went wrong", error };
    }
  }

  async deleteProjectProcess(req, res) {
    try {
      let project = await new ProjectClass().deleteProject(req.body);
      Response.render(res, project);
    } catch (error) {
      Response.render(res, error);
    }
  }
}

module.exports = new ProjectClass();
