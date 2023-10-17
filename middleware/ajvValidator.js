const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });
const Response = require("./response");

ajv.addFormat("objectId", {
  type: "string",
  validate: (data) => {
    return ObjectId.isValid(data);
  },
});

ajv.addFormat("integer", {
  type: "string",
  validate: (data) => {
    const reg = /^\d+$/;
    return reg.test(data);
  },
});

ajv.addFormat("number", {
  type: "string",
  validate: (data) => {
    const reg = /^[+-]?\d+(\.\d+)?$/;
    return reg.test(data);
  },
});

ajv.addFormat("email", {
  type: "string",
  validate: (data) => {
    const reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return reg.test(data);
  },
});

require("ajv-errors")(ajv, { singleError: true });

module.exports.ValidateRequest = function (validationObj) {
  return async function (req, res, next) {
    const validation = ajv.compile(validationObj);
    const validate = validation(req.body);
    if (!validate) {
      console.log("validation", validation);
      return Response.render(res, {
        name: "RequestValidationError",
        message:
          validation.errors[0].instancePath +
          " " +
          validation.errors[0].message,
      });
    }
    next();
  };
};
