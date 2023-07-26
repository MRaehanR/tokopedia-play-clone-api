import app from "./app.js";
import { logger } from "./configs/logger.js";
import mongooseConnection from "./configs/mongoose.js";

const port = process.env.PORT || 3000;

mongooseConnection();

app.listen(port, () => {
  logger.info(`Server Running on port ${port}`);
});
