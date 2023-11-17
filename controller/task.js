const NoteSchema = require("../modules/notes");
const Response = require("../middleware/response");
const { isEmpty } = require("lodash");

class NoteClass {
  async getAllNotes() {
    try {
      const getNotes = await NoteSchema.find({});
      const message =
        getNotes && !isEmpty(getNotes)
          ? "Notes fetched successfully"
          : "Notes not found";
      return {
        name: "Success",
        message,
        data: getNotes && !isEmpty(getNotes) ? getNotes : undefined,
      };
    } catch (error) {
      throw {
        name: "ServerError",
        message: "Something went wrong",
      };
    }
  }

  async getAllNotesProcess(req, res) {
    try {
      const notes = await new NoteClass().getAllNotes();
      Response.render(res, notes);
    } catch (error) {
      Response.render(res, error);
    }
  }

  async notesUpdate(reqData) {
    try {
      const noteData = {
        title: reqData.title,
        description: reqData.description,
        pinned: reqData.pinned,
      };
      let notesData;
      if (reqData._id) {
        notesData = await NoteSchema.findOneAndUpdate(
          { _id: reqData._id },
          { $set: noteData },
          { new: true }
        );
        if (!notesData || isEmpty(notesData)) {
          throw {
            name: "ServerError",
            message: "Something went wrong while updating a note",
          };
        }

        return {
          name: "Success",
          message: "Note updated successfully",
          data: notesData,
        };
      } else {
        notesData = await NoteSchema.create(reqData);
        if (!notesData || isEmpty(notesData))
          throw {
            name: "ServerError",
            message: "Something went wrong while creating a notes",
          };
        return {
          name: "Success",
          message: "Notes created successfully",
          data: notesData,
        };
      }
    } catch (error) {
      throw { name: "ServerError", message: "Something went wrong" };
    }
  }

  async notesUpdateProcess(req, res) {
    try {
      const response = await new NoteClass().notesUpdate(req.body);
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }

  async deleteNote(reqData) {
    try {
      const noteData = await NoteSchema.findOneAndDelete({
        _id: reqData._id,
      });
      if (!noteData || isEmpty(noteData)) {
        throw {
          name: "ServerError",
          message: "Something went wrong while deleting a note",
        };
      }
      return {
        name: "Success",
        message: "Note deleted successfully",
        data: noteData,
      };
    } catch (error) {
      throw { name: "ServerError", message: "Something went wrong" };
    }
  }

  async deleteNoteProcess(req, res) {
    try {
      const response = await new NoteClass().deleteNote(req.body);
      Response.render(res, response);
    } catch (error) {
      Response.render(res, error);
    }
  }
}

module.exports = new NoteClass();
