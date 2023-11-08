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
}

module.exports = new PortfolioClass();
