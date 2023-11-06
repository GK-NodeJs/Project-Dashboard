const { isEmpty } = require("lodash");
const Portfolio = require("../modules/portfolio");
const Response = require("../middleware/response");

class PortfolioClass {
  async updatePortfolioProcess(req, res) {
    try {
      console.log("====================================");
      console.log(req.body);
      console.log("====================================");
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  }
}

module.exports = new PortfolioClass();
