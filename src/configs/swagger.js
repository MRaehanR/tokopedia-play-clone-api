import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "../../docs/swagger.js";

const swaggerRoute = express.Router();

swaggerRoute.use("/api", swaggerUi.serve);
swaggerRoute.get("/api", swaggerUi.setup(swaggerDoc));

export default swaggerRoute;
