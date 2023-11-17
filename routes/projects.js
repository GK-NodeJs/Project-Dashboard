const express = require("express");
const router = express.Router();
const { ValidateRequest } = require("../middleware/ajvValidator");
const _idErrorStore = require("../app/common/error/_idErrorStore");
const createProjectErrorStore = require("../app/dashboard/error/createProjectErrorStore");
const updateProjectErrorStore = require("../app/dashboard/error/updateProjectErrorStore");

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
