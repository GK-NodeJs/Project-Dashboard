const PortfolioSchema = require("../modules/portfolio");
const Response = require("../middleware/response");

class PortfolioClass {
  async updatePortfolioProcess(req, res) {
    try {
      let checkPortfolioData = await PortfolioSchema.findOne({});
      if (checkPortfolioData && checkPortfolioData._id) {
        let updatePortfolioData = await PortfolioSchema.findByIdAndUpdate(
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
        let createPortfolio = await PortfolioSchema.create(req.body);
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
      let getPortfolioData = await PortfolioSchema.findOne({});
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
