const { StatusCodes } = require("http-status-codes");

module.exports = (schema) => {
  return (res, req, next) => {
    let validationError = [];
    let checkMethod = ["body", "params", "query"];

    checkMethod.forEach((key) => {
      if (req[key]) {
        if (schema[key]) {
          let validationResult = schema[key].validate(req[key]);

          if (validationResult.error) {
            validationError.push(validationResult.error.details[0].message);
          }
        }
      }
    });

    if (validationError.length > 0) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "error", message: validationError.join() });
      return;
    }
    next();
  };
};
