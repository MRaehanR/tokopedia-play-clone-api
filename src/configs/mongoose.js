import mongoose from "mongoose";
import { logger } from "./logger.js";

const databaseUrl = process.env.DATABASE_URL;

const mongooseConnection = () => {
  mongoose.connect(databaseUrl);

  mongoose.connection.on("error", (error) => {
    logger.error(error);
  });

  mongoose.connection.once("connected", () => {
    logger.info("Database Connected");
  });
};

export default mongooseConnection;
