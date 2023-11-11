const ImageKit = require("imagekit");
const { isEmpty } = require("lodash");
const Response = require("../middleware/response");

const imageKit = new ImageKit({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
  urlEndpoint: process.env.URL_ENDPOINT,
});

class ImageKitClass {
  fileUpload(req, res) {
    imageKit
      .upload({
        file: req.file.buffer.toString("base64"),
        fileName: req.file.originalname,
        folder: req.body.folder || "",
        useUniqueFileName: true,
      })
      .catch((error) => {
        Response.render(res, {
          name: "FileProcessError",
          message: "File upload failed",
          error: error,
        });
      })
      .then((result) => {
        Response.render(res, {
          name: "Success",
          message: "Files upload successfully",
          data: result,
        });
      });
  }

  fileFetch(req, res) {
    imageKit
      .listFiles({
        skip: req.body.skip || 0,
        limit: req.body.pageLimit || 10,
        path: req.body.path || "",
        type: req.body.type || "",
        tags: req.body.tags || [],
        searchQuery: req.body.searchQuery || "",
        sort: req.body.sort || "",
      })
      .catch((error) => {
        Response.render(res, {
          name: "FileProcessError",
          message: "File fetch failed",
          error: error,
        });
      })
      .then((result) => {
        Response.render(res, {
          name: "Success",
          message: "Files fetched successfully",
          data: result,
        });
      });
  }

  async fileDelete(req, res) {
    try {
      const deleteFile = await imageKit.deleteFile(req.body.fileId);

      if (!deleteFile || isEmpty(deleteFile)) {
        return Response.render(res, {
          name: "Success",
          message: "File deleted successfully",
        });
      }
    } catch (error) {
      Response.render(res, {
        name: "FileProcessError",
        message: "File deletion failed",
        error: error,
      });
    }
  }

  async fileDeleteBulk(req, res) {
    try {
      const deleteFile = await imageKit.bulkDeleteFiles(req.body.fileIds);

      console.log("fileDeleteBulk", deleteFile);
      if (!deleteFile || isEmpty(deleteFile)) {
        return Response.render(res, {
          name: "FileFetchEmpty",
          message: "Files not deleted",
        });
      }

      Response.render(res, {
        name: "Success",
        message: "Files deleted successfully",
      });
    } catch (error) {
      Response.render(res, {
        name: "FileProcessError",
        message: "Bulk file deletion failed",
        error: error,
      });
    }
  }

  createFolder(req, res) {
    imageKit
      .createFolder({
        folderName: req.body.folderName,
        parentFolderPath: req.body.parentFolderPath || "/",
      })
      .catch((error) => {
        Response.render(res, {
          name: "FileProcessError",
          message: "Folder creation failed",
          error: error,
        });
      })
      .then((result) => {
        Response.render(res, {
          name: "Success",
          message: "Folder created successfully",
        });
      });
  }

  deleteFolder(req, res) {
    imageKit
      .deleteFolder(req.body.folderPath)
      .catch((error) => {
        Response.render(res, {
          name: "FileProcessError",
          message: "Folder deletion failed",
          error: error,
        });
      })
      .then((result) => {
        Response.render(res, {
          name: "Success",
          message: "Folder deleted successfully",
        });
      });
  }
}

module.exports = new ImageKitClass();
