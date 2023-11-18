const express = require("express");
const router = express.Router();
const { ValidateRequest } = require("../middleware/ajvValidator");
const _idErrorStore = require("../app/errors/common/_idErrorStore");
const createNoteErrorStore = require("../app/errors/task/createNoteErrorStore");
const updateNoteErrorStore = require("../app/errors/task/updateNoteErrorStore");

router.get("/getAllNotes", require("../controller/notes").getAllNotesProcess);

router.post(
  "/createNote",
  ValidateRequest(createNoteErrorStore),
  require("../controller/notes").createNoteProcess
);

router.post(
  "/updateNote",
  ValidateRequest(updateNoteErrorStore),
  require("../controller/notes").updateNoteProcess
);

router.post(
  "/deleteNote",
  ValidateRequest(_idErrorStore),
  require("../controller/notes").deleteNoteProcess
);

module.exports = router;
