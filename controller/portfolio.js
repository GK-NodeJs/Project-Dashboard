const Portfolio = require("../modules/portfolio");
const Response = require("../middleware/response");

class PortfolioClass {
  async updatePortfolioProcess(req, res) {
    try {
      let checkPortfolioData = await Portfolio.findOne({});
      if (checkPortfolioData && checkPortfolioData._id) {
        let updatePortfolioData = await Portfolio.findByIdAndUpdate(
          checkPortfolioData._id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );
        Response.render(res, {
          name: "Success",
          message: "Portfolio updated successfully",
          data: updatePortfolioData,
        });
      } else {
        let createPortfolio = await Portfolio.create(req.body);
        Response.render(res, {
          name: "Success",
          message: "Portfolio created successfully",
          data: createPortfolio,
        });
      }
    } catch (error) {
      Response.render(res, error);
    }
  }

  async getPortfolioProcess(req, res) {
    try {
      let getPortfolioData = await Portfolio.findOne({});
      if (getPortfolioData && getPortfolioData._id) {
        Response.render(res, {
          name: "Success",
          message: "Portfolio get successfully",
          data: getPortfolioData,
        });
      } else {
        Response.render(res, {
          name: "Success",
          message: "Portfolio not found",
        });
      }
    } catch (error) {
      Response.render(res, error);
    }
  }
}

module.exports = new PortfolioClass();
