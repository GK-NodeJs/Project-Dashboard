const express = require("express");
const router = express.Router();
const multer = require("multer");
const { ValidateRequest } = require("../middleware/ajvValidator");

// Set up a storage strategy for multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Import the error store for the request body
const fileUploadErrorStore = require("../app/imageKit/error/fileUploadErrorStore");
const fileFetchErrorStore = require("../app/imageKit/error/fileFetchErrorStore");
const fileDeleteErrorStore = require("../app/imageKit/error/fileDeleteErrorStore");
const fileDeleteBulkErrorStore = require("../app/imageKit/error/fileDeleteBulkErrorStore");
const createFolderErrorStore = require("../app/imageKit/error/createFolderErrorStore");
const deleteFolderErrorStore = require("../app/imageKit/error/deleteFolderErrorStore");

router.post(
  "/fileUpload",
  upload.single("image"),
  ValidateRequest(fileUploadErrorStore),
  require("../controller/imagekit").fileUpload
);

router.post(
  "/fileFetch",
  ValidateRequest(fileFetchErrorStore),
  require("../controller/imagekit").fileFetch
);

router.post(
  "/fileDelete",
  ValidateRequest(fileDeleteErrorStore),
  require("../controller/imagekit").fileDelete
);

router.post(
  "/fileDeleteBulk",
  ValidateRequest(fileDeleteBulkErrorStore),
  require("../controller/imagekit").fileDeleteBulk
);

router.post(
  "/createFolder",
  ValidateRequest(createFolderErrorStore),
  require("../controller/imagekit").createFolder
);

router.post(
  "/deleteFolder",
  ValidateRequest(deleteFolderErrorStore),
  require("../controller/imagekit").deleteFolder
);

module.exports = router;
