const TagsSchema = require("../modules/tags");
const ListsSchema = require("../modules/lists");
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

  async getAllList() {
    try {
      const listData = await ListsSchema.find({});
      const message =
        listData && !isEmpty(listData)
          ? "Lists fetched successfully"
          : "Lists not found";
      return {
        name: "Success",
        message,
        data: listData && !isEmpty(listData) ? listData : undefined,
      };
    } catch (error) {
      throw { name: "ServerError", message: "Something went wrong" };
    }
  }

  async getAllListProcess(req, res) {
    try {
      const response = await new TaskClass().getAllList();
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }

  async createList(reqData) {
    try {
      const listData = await ListsSchema.create(reqData);
      if (!listData || isEmpty(listData))
        throw {
          name: "ServerError",
          message: "Something went wrong while creating a list",
        };
      return {
        name: "Success",
        message: "List created successfully",
        data: listData,
      };
    } catch (error) {
      throw { name: "ServerError", message: "Something went wrong" };
    }
  }

  async createListProcess(req, res) {
    try {
      const response = await new TaskClass().createList(req.body);
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }

  async updateList() {
    try {
      const setData = {
        name: reqData.name,
        color: reqData.color,
      };
      const listData = await ListsSchema.findOneAndUpdate(
        { _id: reqData._id },
        { $set: setData },
        { new: true }
      );
      if (!listData || isEmpty(listData)) {
        throw {
          name: "ServerError",
          message: "Something went wrong while updating a list",
        };
      }
      return {
        name: "Success",
        message: "List updated successfully",
        data: listData,
      };
    } catch (error) {
      throw { name: "ServerError", message: "Something went wrong" };
    }
  }

  async updateListProcess(req, res) {
    try {
      const response = await new TaskClass().updateList(req.body);
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }

  async deleteList() {
    try {
      const listData = await ListsSchema.findOneAndDelete({
        _id: reqData._id,
      });
      if (!listData || isEmpty(listData)) {
        throw {
          name: "ServerError",
          message: "Something went wrong while deleting a list",
        };
      }
      return {
        name: "Success",
        message: "List deleted successfully",
      };
    } catch (error) {
      throw { name: "ServerError", message: "Something went wrong" };
    }
  }

  async deleteListProcess(req, res) {
    try {
      const response = await new TaskClass().deleteList(req.body);
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }
}

module.exports = new TaskClass();
