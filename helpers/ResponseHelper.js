/** @format */
module.exports = {
  ResponseHelper: ({ action, responseBody, message }, res) => {
    switch (action) {
      case "SUCCESS":
        res.status(200).json({
          message: message || "Request successfully",
          status: 200,
          success: true,
          data: responseBody,
          timestamp: Date.now(),
        });
        break;
      case "BAD_REQUEST":
        res.status(400).json({
          message: message || "Baq Request",
          status: 400,
          success: false,
          data: responseBody,
          timestamp: Date.now(),
        });
        break;
      case "SERVER_ERROR":
        res.status(500).json({
          message: message || "Internal Server Error",
          status: 500,
          success: false,
          data: responseBody,
          timestamp: Date.now(),
        });
        break;
      case "UNAUTHORIZE":
        res.status(401).json({
          message: message || "Unauthorized",
          status: 401,
          success: false,
          data: responseBody,
          timestamp: Date.now(),
        });
        break;
      case "NOTFOUND":
        res.status(404).json({
          message: message || "Data not found",
          status: 404,
          success: false,
          data: null,
          timestamp: Date.now(),
        });
        break;
      default:
        res.status(404).json({
          message: message || "Data not found",
          status: 404,
          success: false,
          data: null,
          timestamp: Date.now(),
        });
        break;
    }
  },
};
