const express = require("express");
const router = express.Router();
const multer = require("multer");

// Set up a storage strategy for multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  "/fileUpload",
  upload.single("image"),
  require("../../controller/common/imageKit").fileUpload
);

router.post(
  "/fileFetch",
  require("../../controller/common/imageKit").fileFetch
);

router.post(
  "/fileDelete",
  require("../../controller/common/imageKit").fileDelete
);

router.post(
  "/fileDeleteBulk",
  require("../../controller/common/imageKit").fileDeleteBulk
);

router.post(
  "/createFolder",
  require("../../controller/common/imageKit").createFolder
);

router.post(
  "/deleteFolder",
  require("../../controller/common/imageKit").deleteFolder
);

module.exports = router;
