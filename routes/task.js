const express = require("express");
const router = express.Router();
const { ValidateRequest } = require("../middleware/ajvValidator");
const _idErrorStore = require("../app/common/error/_idErrorStore");
const noteProcessErrorStore = require("../app/task/error/noteProcessErrorStore");

router.get("/getAllNotes", require("../controller/task").getAllNotesProcess);

router.post(
  "/notesUpdate",
  ValidateRequest(noteProcessErrorStore),
  require("../controller/task").notesUpdateProcess
);

router.post(
  "/deleteNote",
  ValidateRequest(_idErrorStore),
  require("../controller/task").deleteNoteProcess
);

module.exports = router;
