const express = require("express");
const router = express.Router();
const multer = require("multer");
const { ValidateRequest } = require("../middleware/ajvValidator");

// Set up a storage strategy for multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Import the error store for the request body
const fileUploadErrorStore = require("../app/errors/imageKit/fileUploadErrorStore");
const fileFetchErrorStore = require("../app/errors/imageKit/fileFetchErrorStore");
const fileDeleteErrorStore = require("../app/errors/imageKit/fileDeleteErrorStore");
const fileDeleteBulkErrorStore = require("../app/errors/imageKit/fileDeleteBulkErrorStore");
const createFolderErrorStore = require("../app/errors/imageKit/createFolderErrorStore");
const deleteFolderErrorStore = require("../app/errors/imageKit/deleteFolderErrorStore");

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
