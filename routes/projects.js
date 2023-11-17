const express = require("express");
const router = express.Router();
const { ValidateRequest } = require("../middleware/ajvValidator");
const _idErrorStore = require("../app/errors/common/_idErrorStore");
const createProjectErrorStore = require("../app/errors/dashboard/createProjectErrorStore");
const updateProjectErrorStore = require("../app/errors/dashboard/updateProjectErrorStore");

router.get(
  "/getAllProjects",
  require("../controller/projects").getAllProjectProcess
);

router.post(
  "/createProject",
  ValidateRequest(createProjectErrorStore),
  require("../controller/projects").createProjectProcess
);

router.post(
  "/updateProject",
  ValidateRequest(updateProjectErrorStore),
  require("../controller/projects").updateProjectProcess
);

router.post(
  "/deleteProject",
  ValidateRequest(_idErrorStore),
  require("../controller/projects").deleteProjectProcess
);

module.exports = router;
