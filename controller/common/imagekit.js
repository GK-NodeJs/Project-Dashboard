const ImageKit = require("imagekit");
const { isEmpty } = require("lodash");
const Response = require("../../middleware/response");

const imageKit = new ImageKit({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
  urlEndpoint: process.env.URL_ENDPOINT,
});

class ImageKitClass {
  async fileUpload(req, res) {
    try {
      const uploadFile = await imageKit.upload({
        file: req.file.buffer.toString("base64"),
        fileName: req.file.originalname,
        folder: req.body.folder || "",
        useUniqueFileName: true,
      });

      if (!uploadFile || isEmpty(uploadFile)) {
        console.log("uploadFile", uploadFile);
        return Response.render(res, {
          name: "FileFetchEmpty",
          message: "File not uploaded",
        });
      }

      Response.render(res, {
        name: "Success",
        message: "File uploaded successfully",
        data: uploadFile,
      });
    } catch (error) {
      Response.render(res, {
        name: "FileProcessError",
        message: "File upload failed",
        error: error,
      });
    }
  }

  async fileFetch(req, res) {
    try {
      const fetchFile = await imageKit.listFiles({
        skip: req.body.skip || 0,
        limit: req.body.pageLimit || 10,
        path: req.body.path || "",
        type: req.body.type || "",
        tags: req.body.tags || [],
        searchQuery: req.body.searchQuery || "",
      });

      if (!fetchFile || isEmpty(fetchFile)) {
        return Response.render(res, {
          name: "FileFetchEmpty",
          message: "Files not fetched",
        });
      }

      Response.render(res, {
        name: "Success",
        message: "Files fetched successfully",
        data: fetchFile,
      });
    } catch (error) {
      Response.render(res, {
        name: "FileProcessError",
        message: "File fetch failed",
        error: error,
      });
    }
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

  async createFolder(req, res) {
    try {
      const createFolderData = await imageKit.createFolder({
        folderName: req.body.folderName,
        parentFolderPath: req.body.parentFolderPath || "/",
      });
      if (!createFolderData || isEmpty(createFolderData)) {
        return Response.render(res, {
          name: "Success",
          message: "Folder created successfully",
        });
      }
    } catch (error) {
      Response.render(res, {
        name: error.name || "FileProcessError",
        message: error.message || "Folder creation failed",
        error: error,
      });
    }
  }

  async deleteFolder(req, res) {
    try {
      const deleteFolderData = await imageKit.deleteFolder(req.body.folderPath);

      if (!deleteFolderData || isEmpty(deleteFolderData)) {
        return Response.render(res, {
          name: "Success",
          message: "Folder deleted successfully",
        });
      }
    } catch (error) {
      Response.render(res, {
        name: "FileProcessError",
        message: "Folder deletion failed",
        error: error,
      });
    }
  }
}

module.exports = new ImageKitClass();
