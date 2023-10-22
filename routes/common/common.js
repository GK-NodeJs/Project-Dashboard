const express = require("express");
const router = express.Router();
const multer = require("multer");
const { ValidateRequest } = require("../../middleware/ajvValidator");

// Set up a storage strategy for multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Import the error store for the request body
const fileUploadErrorStore = require("../../app/common/error/fileUploadErrorStore");
const fileFetchErrorStore = require("../../app/common/error/fileFetchErrorStore");
const fileDeleteErrorStore = require("../../app/common/error/fileDeleteErrorStore");
const fileDeleteBulkErrorStore = require("../../app/common/error/fileDeleteBulkErrorStore");
const createFolderErrorStore = require("../../app/common/error/createFolderErrorStore");
const deleteFolderErrorStore = require("../../app/common/error/deleteFolderErrorStore");

router.post(
  "/fileUpload",
  upload.single("image"),
  ValidateRequest(fileUploadErrorStore),
  require("../../controller/common/imageKit").fileUpload
);

router.post(
  "/fileFetch",
  ValidateRequest(fileFetchErrorStore),
  require("../../controller/common/imageKit").fileFetch
);

router.post(
  "/fileDelete",
  ValidateRequest(fileDeleteErrorStore),
  require("../../controller/common/imageKit").fileDelete
);

router.post(
  "/fileDeleteBulk",
  ValidateRequest(fileDeleteBulkErrorStore),
  require("../../controller/common/imageKit").fileDeleteBulk
);

router.post(
  "/createFolder",
  ValidateRequest(createFolderErrorStore),
  require("../../controller/common/imageKit").createFolder
);

router.post(
  "/deleteFolder",
  ValidateRequest(deleteFolderErrorStore),
  require("../../controller/common/imageKit").deleteFolder
);

module.exports = router;
