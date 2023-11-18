const TagsSchema = require("../modules/tags");
const Response = require("../middleware/response");
const { isEmpty } = require("lodash");

class TaskClass {
  async getAllTags() {
    try {
      const getTags = await TagsSchema.find({});
      const message =
        getTags && !isEmpty(getTags)
          ? "Tags fetched successfully"
          : "Tags not found";
      return {
        name: "Success",
        message,
        data: getTags && !isEmpty(getTags) ? getTags : undefined,
      };
    } catch (error) {
      throw { name: "ServerError", message: "Something went wrong" };
    }
  }

  async getAllTagsProcess(req, res) {
    try {
      const response = await new TaskClass().getAllTags();
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }

  async createTag(reqData) {
    try {
      const tagsData = await TagsSchema.create(reqData);
      if (!tagsData || isEmpty(tagsData))
        throw {
          name: "ServerError",
          message: "Something went wrong while creating a tag",
        };
      return {
        name: "Success",
        message: "Tag created successfully",
        data: tagsData,
      };
    } catch (error) {
      throw { name: "ServerError", message: "Something went wrong" };
    }
  }

  async createTagProcess(req, res) {
    try {
      const response = await new TaskClass().createTag(req.body);
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }

  async updateTag(reqData) {
    try {
      const tagData = await TagsSchema.findOneAndUpdate(
        { _id: reqData._id },
        { name: reqData.name },
        { new: true }
      );
      if (!tagData || isEmpty(tagData)) {
        throw {
          name: "ServerError",
          message: "Something went wrong while updating a tag",
        };
      }
      return {
        name: "Success",
        message: "Tag updated successfully",
        data: tagData,
      };
    } catch (error) {
      throw { name: "ServerError", message: "Something went wrong" };
    }
  }

  async updateTagProcess(req, res) {
    try {
      const response = await new TaskClass().updateTag(req.body);
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }

  async deleteTag(reqData) {
    try {
      const tagData = await TagsSchema.findOneAndDelete({
        _id: reqData._id,
      });
      if (!tagData || isEmpty(tagData)) {
        throw {
          name: "ServerError",
          message: "Something went wrong while deleting a tag",
        };
      }
      return {
        name: "Success",
        message: "Tag deleted successfully",
      };
    } catch (error) {
      throw { name: "ServerError", message: "Something went wrong" };
    }
  }

  async deleteTagProcess(req, res) {
    try {
      const response = await new TaskClass().deleteTag(req.body);
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }
}

module.exports = new TaskClass();
