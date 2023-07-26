import winston from "winston";

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "./src/logs/error.log",
      level: "error"
    })
  ]
});
