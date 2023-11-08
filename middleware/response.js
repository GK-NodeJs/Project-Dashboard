const statusCode = require("../constants/statusCode");

class Response {
  static render(res, result) {
    switch (result.name) {
      case "Success":
        res.status(statusCode.Success).json({
          status: statusCode.Success,
          message: result.message,
          data: result.data,
        });
        break;
      case "NotFound":
        res.status(statusCode.Not_Found).json({
          status: statusCode.Not_Found,
          type: result.name,
          errors: result.message,
        });
        break;
      case "ServerError":
        res.status(statusCode.Internal_Server_Error).json({
          status: statusCode.Internal_Server_Error,
          message: result.message,
          errors: result.error,
        });
        break;
      case "RequestValidationError":
        res.status(statusCode.Bad_Request).json({
          status: statusCode.Bad_Request,
          type: result.name,
          errors: result.message,
        });
        break;
      case "FileFetchEmpty":
        res.status(statusCode.No_Content).json({
          status: statusCode.No_Content,
          message: result.message,
        });
      case "FileProcessError":
        res.status(statusCode.Bad_Request).json({
          status: statusCode.Bad_Request,
          message: result.message,
          errors: result.error,
        });
        break;
      default:
        res.status(statusCode.Internal_Server_Error).json({
          status: statusCode.Internal_Server_Error,
          message: "Internal server error",
          error: {
            message: result.message || "oops something went wrong",
          },
        });
    }
  }
}

module.exports = Response;
