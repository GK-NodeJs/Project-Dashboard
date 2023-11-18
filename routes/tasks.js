const express = require("express");
const router = express.Router();
const { ValidateRequest } = require("../middleware/ajvValidator");
const _idErrorStore = require("../app/errors/common/_idErrorStore");
const createTagErrorStore = require("../app/errors/task/createTagErrorStore");

router.get("/getAllTags", require("../controller/tasks").getAllTagsProcess);

router.post(
  "/createTag",
  ValidateRequest(createTagErrorStore),
  require("../controller/tasks").createTagProcess
);

router.post(
  "/deleteTag",
  ValidateRequest(_idErrorStore),
  require("../controller/tasks").deleteTagProcess
);

module.exports = router;
