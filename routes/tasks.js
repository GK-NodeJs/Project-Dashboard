const express = require("express");
const router = express.Router();
const { ValidateRequest } = require("../middleware/ajvValidator");
const _idErrorStore = require("../app/errors/common/_idErrorStore");
const createTagErrorStore = require("../app/errors/task/createTagErrorStore");
const updateTagErrorStore = require("../app/errors/task/updateTagErrorStore");
const createListErrorStore = require("../app/errors/task/createListErrorStore");
const updateListErrorStore = require("../app/errors/task/updateListErrorStore");

router.get("/getAllTags", require("../controller/tasks").getAllTagsProcess);

router.post(
  "/createTag",
  ValidateRequest(createTagErrorStore),
  require("../controller/tasks").createTagProcess
);

router.post(
  "/updateTag",
  ValidateRequest(updateTagErrorStore),
  require("../controller/tasks").updateTagProcess
);

router.post(
  "/deleteTag",
  ValidateRequest(_idErrorStore),
  require("../controller/tasks").deleteTagProcess
);

router.get("/getAllList", require("../controller/tasks").getAllListProcess);

router.post(
  "/createList",
  ValidateRequest(createListErrorStore),
  require("../controller/tasks").createListProcess
);

router.post(
  "/updateList",
  ValidateRequest(updateListErrorStore),
  require("../controller/tasks").updateListProcess
);

router.post(
  "/deleteList",
  ValidateRequest(_idErrorStore),
  require("../controller/tasks").deleteListProcess
);

module.exports = router;
