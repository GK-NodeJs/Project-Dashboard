const express = require("express");
const router = express.Router();
const { ValidateRequest } = require("../middleware/ajvValidator");

// Import the error store for the request body
const updatePortfolioErrorStore = require("../app/portfolio/updatePortfolioErrorStore");

router.post(
  "/updatePortfolio",
  ValidateRequest(updatePortfolioErrorStore),
  require("../controller/portfolio").updatePortfolioProcess
);

router.get(
  "/getPortfolio",
  require("../controller/portfolio").getPortfolioProcess
);

module.exports = router;
