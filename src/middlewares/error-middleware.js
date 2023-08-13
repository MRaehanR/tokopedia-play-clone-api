import { ResponseError } from "../errors/response-error.js";
import { logger, loggerFile } from "../configs/logger.js";

export const errorMiddleware = (error, req, res, next) => {
  if (!error) {
    next();
    return;
  }

  if (error instanceof ResponseError) {
    res.error({ message: error.message, code: error.code, data: error.data, errors: error.errors }).end();
  } else if (error.name == "ValidationError") {
    const errors = {};
    Object.keys(error.errors).forEach((key) => {
      errors[key] = error.errors[key].message;
    });

    logger.error(errors);
    res.internalServerError().end();
  } else {
    loggerFile.error(error);
    logger.error(error);
    res.internalServerError().end();
  }
};
