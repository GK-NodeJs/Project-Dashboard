const express = require("express");
const router = express.Router();
const { ValidateRequest } = require("../middleware/ajvValidator");
const _idErrorStore = require("../app/errors/common/_idErrorStore");
const noteProcessErrorStore = require("../app/errors/task/noteProcessErrorStore");

router.get("/getAllNotes", require("../controller/notes").getAllNotesProcess);

router.post(
  "/notesUpdate",
  ValidateRequest(noteProcessErrorStore),
  require("../controller/notes").notesUpdateProcess
);

router.post(
  "/deleteNote",
  ValidateRequest(_idErrorStore),
  require("../controller/notes").deleteNoteProcess
);

module.exports = router;
