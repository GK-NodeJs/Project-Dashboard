const express = require("express");
const router = express.Router();
const { ValidateRequest } = require("../../middleware/ajvValidator");
const createProjectErrorStore = require("../../app/dashboard/error/createProjectErrorStore");

router.get(
  "/getAllProjects",
  require("../../controller/dashboard/project").getAllProjectProcess
);

router.post(
  "/createProject",
  ValidateRequest(createProjectErrorStore),
  require("../../controller/dashboard/project").createProjectProcess
);

router.post(
  "/deleteProject",
  require("../../controller/dashboard/project").deleteProjectProcess
);

module.exports = router;
